/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 左叶子是一个既位于父节点的左边又没有子节点的节点
function recursion(node, res) {
    // 终止条件确定错误,这里是return 0,不是res；else if的终止条件也写错了,把逻辑写进来了. 总体来说逻辑很混乱
    if(node === null) return 0;
    else if(node.left === null && node.right === null) return 0;

    let leftValue = recursion(node.left);
    if(node.left && !node.left.left && !node.left.right) leftValue = root.left.val;
    let rightValue = recursion(node.right);

    let sum = leftValue + rightValue;
    // 如何正确返回res
    return sum;
}

// 递归法-后序遍历, 从刚开始遍历顺序选错
var sumOfLeftLeaves = function(root) {
    if(!root) return root;
    if(root.left === null && root.right === null) return 0;
    return recursion(root, res = 0);
};

const root = new TreeNode(1);
// const node2 = new TreeNode(9);
// const node3 = new TreeNode(20);
// const node4 = new TreeNode(15);
// const node5 = new TreeNode(7);
// root.left = node2;
// root.right = node3;
// node3.left = node4;
// node3.right = node5;

console.log(sumOfLeftLeaves(root));