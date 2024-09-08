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
 * @param {number} val
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right = undefined ? null : right);
}

// 方法二: 递归法- 前序遍历
var searchBST = function(root, val) {
    const recursion = function(root, val) {
        // 不会确定终止条件..
        if(root === null || root.val === val) return root;

        if(val > root.val) {
            return recursion(root.right, val);
        }else if(val < root.val) {
            return recursion(root.left, val);
        }
    }

    if(!root) return null;
    return recursion(root, val);
};

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(7);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(searchBST(root, 2));