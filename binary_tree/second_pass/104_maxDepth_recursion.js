function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var maxDepth = function(root) {
    const recursion = function(node, max) {
        if(!node) return max;
        
        const left_maxDepth = recursion(node.left, max);
        const right_maxDepth = recursion(node.right, max);
        max++;
        console.log(node, max);
    }
    let max = 0;
    recursion(root, max);
    return max;
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

console.log(maxDepth(root));