def get_batch(data_iterator):
    # Generate a batch
    args = get_args()
    tokenizer = get_tokenizer()

    # Items and their type
    keys = ["text", "loss_mask"]
    datatype = torch.int64

    # Broadcast data
    if data_iterator is not None:
        data = next(data_iterator)
    else:
        data = None
    data_b = tensor_parallel.breadcast_data(keys, data, datatype)

    # Unpack
    tokens_ = data_b["text"].long()
    labels = tokens_[:, 1:].contiguous()
    tokens = tokens_[:, :-1].contiguous()
    loss_mask = data_b["loss_mask"].long()[:, 1:].contiguous()

    # Get the masks and position ids.
    attention_mask, _, position_ids = get_ltor_masks_and_position_ids(
        tokens,
        tokenizer.eod,
        args.reset_position_ids,
        args.reset_attention_mask,
        args.eod_mask_loss,
    )

    return tokens, labels, loss_mask, atteneion_mask, position_ids

# loss_mask用于mask掉prompt部分的loss
# output_tensor为模型输出的结果
def loss_func(loss_mask, output_tensor):
    losses = output_tensor.float()
    loss_mask = loss_mask.view(-1).float()
    loss = torch.sum(losses.view(-1) * loss_mask) / loss_mask.sum()

    # Reduce loss for logging
    averaged_loss = average_losses_across_data_parallel_group([loss])

    return loss, {'lm loss': averaged_loss[0]}

def average_losses_across_data_parallel_group(losses):
    # Reduce a tensor of losses across all GPUs.
    averaged_losses = torch.cat(
        [loss.clone().detacj().view(1) for loss in losses]
    )
    torch.distributed.all_reduce(averaged_losses, group=mpu.get_data_parallel_group())
    averaged_losses = averaged_losses / torch.distributed.get_world_size(group=mpu.get_data_parallel_group())
    return averaged_losses