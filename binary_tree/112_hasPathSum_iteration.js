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
 * @param {number} targetSum
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 迭代法-栈模拟前序遍历
let hasPathSum = function (root, targetsum) {
    if(root === null) return false;
    const nodeArr = [root];
    const valArr = [0];
    while(nodeArr.length) {
        let curNode = nodeArr.shift();
        let curVal = valArr.shift();
        curVal += curNode.val;

        if(curNode.left === null && curNode.right === null && curVal === targetsum) return true;

        if(curNode.left) {
            nodeArr.push(curNode.left);
            valArr.push(curVal);
        }

        if(curNode.right) {
            nodeArr.push(curNode.right);
            valArr.push(curVal);
        }
    } 
    return false;
}

const root = new TreeNode(5);
const node2 = new TreeNode(4);
// root.left = node2;
const node3 = new TreeNode(8);
const node4 = new TreeNode(11);
const node5 = new TreeNode(13);
const node6 = new TreeNode(4);
const node7 = new TreeNode(7);
const node8 = new TreeNode(2);
const node9 = new TreeNode(1);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = null;
node3.left = node5;
node3.right = node6;
node4.left = node7;
node4.right = node8;
node6.right = node9;

console.log(hasPathSum(root, 22));