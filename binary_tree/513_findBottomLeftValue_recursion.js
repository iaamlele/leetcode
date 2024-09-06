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

var findBottomLeftValue = function(root) {
    //首先考虑递归遍历 前序遍历 找到最大深度的叶子节点即可
    let maxPath = 0, resNode = null;
    // 1. 确定递归函数的函数参数
    const dfsTree = function(node, curPath) {
    // 2. 确定递归函数终止条件
        if(node.left === null && node.right === null) {
            if(curPath > maxPath) {
            maxPath = curPath;
            resNode = node.val;
            }
        }
        node.left && dfsTree(node.left, curPath+1);
        node.right && dfsTree(node.right, curPath+1);
    }
    dfsTree(root,1);
    return resNode;
};


const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = null;
node3.left = node5;
node3.right = node6;
node4.left = null;
node4.right = null;
node5.left = node7;

console.log(findBottomLeftValue(root));