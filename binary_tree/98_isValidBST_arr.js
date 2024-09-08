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
    this.right = (right = undefined ? null : right);
}
// 方法一: 数组协助法
// 二叉搜索树特性:输出的二叉搜索树节点的数值是有序序列。有了这个特性，验证二叉搜索树，就相当于变成了判断一个序列是不是递增的了
var isValidBST = function(root) {
    const arr = [];
    const reversal = function(root) {
        if(root) {
            reversal(root.left);
            arr.push(root.val);
            reversal(root.right);
        }        
    }
    reversal(root);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= arr[i - 1]) return false;
    }
    return true;
};

const root = new TreeNode(2);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

console.log(isValidBST(root));