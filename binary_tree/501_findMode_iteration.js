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
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 迭代法-中序遍历 + 在栈上求最大众数
var findMode = function(root) {
    let res = [];
    let stk = [root];

    while(stk.length) {
        let length = stk.length;
        for(let i = 0; i < length; i++) {
            if()
        }
    }
};

const root = new TreeNode(1);
const node2 = new TreeNode(1);
root.left = node2;
// const node3 = new TreeNode(2);
// root.right = node2;
// node2.left = node3;

console.log(findMode(root));