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

// 递归:后序遍历
function recursion(node) {
    if(!node) return 0;
    let leftdepth = recursion(node.left);
    let rightdepth = recursion(node.right);
    let depth = Math.max(leftdepth, rightdepth) + 1;
    return depth;
}

var maxDepth = function(root) {
    if(!root) return root;
    return recursion(root);
};

const root = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);
root.left = node2;
root.right = node3;
node3.left = node4;
node3.right = node5;

console.log(maxDepth(root));