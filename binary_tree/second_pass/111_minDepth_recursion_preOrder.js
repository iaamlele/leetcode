function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

//　前序
var minDepth = function(root) {
    let res = Infinity;
    if(!root) return 0;

    const recursion = function(node, depth) {
        if(!node.left && !node.right) res = depth > res ? res : depth;
        if(node.left) {
            depth++;
            recursion(node.left, depth);
            depth--;
        }
        if(node.right) {
            depth++;
            recursion(node.right, depth);
            depth--;
        }
        return;
    }

    recursion(root, 1);
    return res;
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