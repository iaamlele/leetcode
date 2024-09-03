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

function compare(left, right) {
    if(left === null && right !== null) return false;
    else if(left !== null && right === null) return false;
    else if(!left && !right) return true;
    else if(left.val !== right.val) return false;
    
    const outside = compare(left.left, right.right);
    const inside = compare(left.right, right.left);
    return outside && inside;
}

var isSymmetric = function(root) {
    if(!root) return root;
    return compare(root.left, root.right);
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