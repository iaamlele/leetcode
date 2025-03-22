var rotate = function (nums, k) {
    const rotate_num = k % nums.length;
    const tail_arr = nums.slice(-rotate_num,);

    const tail_index = nums.length - rotate_num - 1; // 3
    let right_index = nums.length - 1; // 6
    for (let i = tail_index; i >= 0; i--) {
        nums[right_index] = nums[i];
        right_index--;
    }

    for (let i = 0; i < tail_arr.length; i++) {
        nums[i] = tail_arr[i];
    }
    console.log(nums);
};