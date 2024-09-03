/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function isSame(left, right) {
    if(left === null && right !== null) return false;
    else if(left !== null && right === null) return false;
    else if(left === null && right === null) return true;
    else if(left.val !== right.val) return false;

    const leftside = isSame(left.left, right.left);
    const rightside = isSame(left.right, right.right);

    return leftside&&rightside;
}
var isSameTree = function(p, q) {
    return isSame(p, q);
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

const root2 = new TreeNode(1);
const node22 = new TreeNode(2);
const node33 = new TreeNode(3);
root2.left = node22;
root2.right = node33;

console.log(isSameTree(root, root2));