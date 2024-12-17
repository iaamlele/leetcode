function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 后序遍历
const isBalanced = function(root) {
    // 参数：当前传入节点。 返回值：以当前传入节点为根节点的树的高度。
    // -1 表示已经不是平衡二叉树了，否则返回值是以该节点为根节点树的高度
    const recursion = function(node) {
        if(!node) return 0; // 表示当前节点为根节点的树高度为0

        let left_hight = recursion(node.left);
        if(left_hight === -1) return -1;
        let right_hight = recursion(node.right);
        if(right_hight === -1) return -1;

        if(Math.abs(left_hight - right_hight) > 1) return -1;
        else return 1 + Math.max(left_hight, right_hight);
    }
    const res = recursion(root, 1);
    if(res === -1) return false;
    else return true;
}

const root = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);
node3.left = node4;
node3.right = node5;

const node6 = new TreeNode(6);
node5.right = node6;


console.log(isBalanced(root));