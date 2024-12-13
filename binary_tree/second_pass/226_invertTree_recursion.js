function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const invertTree = function(root) {
    const recursion = function(node) {
        if(node === null) return;

        const left = node.left;
        node.left = node.right;
        node.right = left;
        recursion(node.left);
        recursion(node.right);
    }
    recursion(root);
    return root;
}

// const root = new TreeNode(4);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(7);
// root.left = node2;
// root.right = node3;
// const node4 = new TreeNode(1);
// const node5 = new TreeNode(3);
// node2.left = node4;
// node2.right = node5;
// const node6 = new TreeNode(6);
// const node7 = new TreeNode(9);
// node3.left = node6;
// node3.right = node7;
const root = new TreeNode(1);
const node2 = new TreeNode(2);
root.right = node2;

console.log(invertTree(root));