function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

//　后序
var minDepth = function(root) {
    const recursion = function(node) {
        if(!node) return 0;
        const leftDepth = recursion(node.left);
        const rightDepth = recursion(node.right);
        if(node.left === null && node.right !==null) {
            return 1 + rightDepth;
        }
        if(node.left !== null && node.right === null) {
            return 1 + leftDepth;
        }
        const result = 1 + Math.min(leftDepth, rightDepth);
        return result;
    }
    return recursion(root);
}

const root = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);
node3.left = node4;
node3.right = node5;

console.log(minDepth(root));