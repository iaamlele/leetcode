function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const insertIntoBST = function(root, val) {
    const recursion = function(node, val) {
        if(node === null) return new TreeNode(val);

        if(node.val > val) {
            if(node.left) {
                recursion(node.left, val);
            }else {
                node.left = recursion(node.left, val);
            }
        }
        if(node.val < val) {
            if(node.right) {
                recursion(node.right, val);
            }else {
                node.right = recursion(node.right, val);
            }
        }

        return;
    }
    if(!root) return new TreeNode(val);
    recursion(root, val);
    return root;
}

// const root = new TreeNode(4);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(7);
// const node4 = new TreeNode(1);
// const node5 = new TreeNode(3);
// root.left = node2;
// root.right = node3;
// node2.left = node4;
// node2.right = node5;

const root = new TreeNode();

console.log(insertIntoBST(root, 5))