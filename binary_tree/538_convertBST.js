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
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

//  方法一: 递归法, 抄的, 刚开始没读懂题目, 递归不熟悉~
var convertBST = function(root) {
    let pre = 0;
    const traversal = function(node) {
        if(node === null) return;

        traversal(node.right);
        node.val += pre;
        pre = node.val;
        traversal(node.left);
    }

    traversal(root);
    return root;
};

const root = new TreeNode(0);
const node2 = new TreeNode(1);
root.right = node2;

console.log(convertBST(root));