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
    this.right = (right = undefined ? null : right);
}

// 递归法:中序遍历, 等于一个有序数组! 思想复杂了,把当前节点和前一个进行对比就行
// 树中节点数最少2个
var getMinimumDifference = function(root) {
    const recursion = function(root) {
        if(!root) return;
        recursion(root.left);  // 左
        if(pre !== null) { // 中
            result = Math.min(result, root.val - pre.val);
        }
        pre = root; // 记录前一个
        recursion(root.right);        
    }
    let pre = null;
    let result = Infinity; // 定义为正无穷的写法
    recursion(root);
    return result;
};

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(6);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(getMinimumDifference(root));
