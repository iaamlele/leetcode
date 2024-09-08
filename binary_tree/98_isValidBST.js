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
// 方法二:递归法
// 陷阱1:不能单纯的比较左节点小于中间节点，右节点大于中间节点就完事了。要比较的是 左子树所有节点小于中间节点，右子树所有节点大于中间节点
// 返回值:只有寻找某一条边（或者一个节点）的时候，递归函数会有bool类型的返回值
// 二叉搜索树也可以为空
var isValidBST = function(root) {
    const recursion = function(root) {
        if(!root) return true;

        const left_isValid = isValidBST(root.left);
        const right_isValid = isValidBST(root.right);

        return left_isValid && right_isValid;
    }

    if(!root) return false;
    return recursion(root);
};

const root = new TreeNode(2);
const node2 = new TreeNode(2);
// const node3 = new TreeNode(3);
root.left = node2;
// root.right = node3;

console.log(isValidBST(root));