function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const searchBST = function(root, val) {
    const recursion = function(root, val) {
        if(!root) return root;
        if(root.val === val) return root;

        if(val > root.val) return recursion(root.right, val);
        if(val < root.val) return recursion(root.left, val);
    }

    return recursion(root, val);
}

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(7);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
node2.left = node4;
node2.right = node5;

console.log(searchBST(root, 2));