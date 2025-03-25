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
// 思路：任意节点左子树和右子树高度之和
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}
var diameterOfBinaryTree = function(root) {
    let res = 1;
    const recursion = function(node) {
        let L = 0, R = 0;
        if(!node) return 0;
        if(node.left) L = recursion(node.left);
        if(node.right) R = recursion(node.right);
        res = Math.max(res, L + R + 1);
        return  Math.max(L, R) + 1;
    }
    recursion(root);
    return res - 1;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
node2.left = node4;
node2.right = node5;

console.log(diameterOfBinaryTree(root));