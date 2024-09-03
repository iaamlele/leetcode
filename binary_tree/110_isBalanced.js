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
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 递归法:后序遍历
// Math.abs():返回一个数字的绝对值

const recursion = function(node) {
    if(!node) return 0;

    let left_len = recursion(node.left);
    if(left_len === -1) return -1;
    let right_len = recursion(node.right);
    if(right_len === -1) return -1;

    return (Math.abs(left_len - right_len) > 1 ? -1 : Math.max(left_len, right_len) + 1);
}
var isBalanced = function(root) {
    return !(recursion(root) === -1);
};

// const root = new TreeNode(3);
// const node2 = new TreeNode(9);
// const node3 = new TreeNode(20);
// const node4 = new TreeNode(15);
// const node5 = new TreeNode(7);
// root.left = node2;
// root.right = node3;
// node3.left = node4;
// node3.right = node5;

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(2);
const node4 = new TreeNode(3);
const node5 = new TreeNode(3);
const node6 = new TreeNode(4);
const node7 = new TreeNode(4);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;

console.log(isBalanced(root));