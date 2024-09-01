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

var isSymmetric = function(root) {
    // 迭代方法判断是否是对称二叉树
    // 首先判断root是否为空
    if(root === null) {
        return true;
    }
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length) {
        let leftNode = queue.shift();    //左节点
        let rightNode = queue.shift();   //右节点
        if(leftNode === null && rightNode === null) {
            continue;
        }
        if(leftNode === null || rightNode === null || leftNode.val !== rightNode.val) {
            return false;
        }
        queue.push(leftNode.left);     //左节点左孩子入队
        queue.push(rightNode.right);   //右节点右孩子入队
        queue.push(leftNode.right);    //左节点右孩子入队
        queue.push(rightNode.left);    //右节点左孩子入队
    }
    
    return true;
  };
  

// const root = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(2);
// root.left = node2;
// root.right = node3;
// const node4 = new TreeNode(3);
// const node5 = new TreeNode(4);
// node2.left = node4;
// node2.right = node5;
// const node6 = new TreeNode(4);
// const node7 = new TreeNode(3);
// node3.left = node6;
// node3.right = node7;

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(2);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(3);
const node5 = new TreeNode(3);
node2.left = null;
node2.right = node4;
node3.left = null;
node3.right = node5;

console.log(isSymmetric(root));