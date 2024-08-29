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
 * @return {number[]}
 */
// 创建对象的两种方式: 1.构造函数; 2.类(类声明, 类表达式)
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var preorderTraversal = function(root) {
    const result = [];
    const dfs = function(node) {
        if(node) {
            result.push(node.val);
            console.log(node.val);
            dfs(node.left);
            dfs(node.right);
        }
    }
    dfs(root);
    return result;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

console.log(preorderTraversal(root));