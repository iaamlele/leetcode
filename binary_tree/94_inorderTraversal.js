/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var inorderTraversal = function(root) {
    const result = [];
    const dfs = (node) => {
        if(node) {
            dfs(node.left);
            result.push(node.val);
            dfs(node.right);
        }
    }
    dfs(root);
    return result;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

console.log(inorderTraversal(root));