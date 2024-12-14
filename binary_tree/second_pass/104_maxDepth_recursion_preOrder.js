function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var maxDepth = function(root) {
    let res = 0;
    if(!root) return res;

    const preOrder = function(node, depth) {
        res = depth > res ? depth : res;

        if(!node.left && !node.right) return;
        if(node.left) {
            depth++;
            preOrder(node.left, depth);
            depth--;
        }
        if(node.right) {
            depth++;
            preOrder(node.right, depth);
            depth--;
        }
        return;
    }

    preOrder(root, 1);
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

console.log(maxDepth(root));