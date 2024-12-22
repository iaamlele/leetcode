function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const deleteNode = function(root, val) {
    if(!root) return root;

    if(root.val > val) {
        root.left = deleteNode(root.left, val);
        return root;
    }
    else if(root.val < val) {
        root.right = deleteNode(root.right, val);
        return root;
    }else {
        // 没找到删除的节点，遍历到空结点就直接返回
        if(!root.left && !root.right) return null;
        // 有一个孩子不存在
        if(!root.left && root.right) {
            return root.right;
        }else if(root.left && !root.right) {
            return root.left;
        }
        // 有左右子树，则将删除节点的左子树头节点放到右子树最左边节点的左孩子上，返回删除节点右孩子为新的根节点
        const rightNode = root.right;
        const minNode = getMinNode(rightNode);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
        return root;    
    }    
}
const getMinNode = function(root) {
    while(root.left) {
        root = root.left;
    }
    return root;
}

const root = new TreeNode(5);
const node2 = new TreeNode(3);
const node3 = new TreeNode(6);
const node4 = new TreeNode(2);
const node5 = new TreeNode(4);
const node6 = new TreeNode(7);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

console.log(deleteNode(root, 3))