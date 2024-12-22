function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 右中左
const convertBST = function(root) {
    let pre = 0;
    const recursion = function(node) {
        if(!node) return node;

        recursion(node.right);
        node.val += pre;
        pre = node.val;
        recursion(node.left);
        
    }
    recursion(root);
    return root;
}

// const root = new TreeNode(0);
// const node2 = new TreeNode(1);
// root.right = node2;

const root = new TreeNode(3);
const node2 = new TreeNode(2);
const node3 = new TreeNode(4);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(1);
node2.left = node4;

console.log(convertBST(root));