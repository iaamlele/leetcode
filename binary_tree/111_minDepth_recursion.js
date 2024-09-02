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

// 递归法-中序遍历
function recursion(node) {
    if(!node) return 0;
    
    let left_length = recursion(node.left);
    let right_length = recursion(node.right);
    if(left_length === 0 && right_length !== 0) {
        return right_length + 1;
    }
    if(left_length !== 0 && right_length === 0) {
        return left_length + 1;
    }

    return Math.min(left_length, right_length) + 1;
}

var minDepth = function(root) {
    return recursion(root);
};

const root = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);
root.left = node2;
root.right = node3;
node3.left = node4;
node3.right = node5;

console.log(minDepth(root));