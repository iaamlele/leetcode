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
 * @return {string[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var binaryTreePaths = function(root) {
    const res = [];
    const getPath = function(node, curPath) {
        if(!node.left && !node.right) {
            curPath += node.val;
            res.push(curPath);
            return;
        }

        curPath += node.val + '->';
        node.left && getPath(node.left, curPath);
        console.log(curPath)
        node.right && getPath(node.right, curPath);
    }
    getPath(root, "");
    return res;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(5);
root.left = node2;
root.right = node3;
node2.right = node4;

console.log(binaryTreePaths(root));