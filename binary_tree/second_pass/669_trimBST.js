function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const trimBST = function(root, low, high) {
    if(root === null) return root;

    if(root.val < low) {
        const right = trimBST(root.right, low, high);
        return right;
    }
    if(root.val > high) {
        const left = trimBST(root.left, low, high);
        return left;
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
}

const root = new TreeNode(1);
const node2 = new TreeNode(0);
const node3 = new TreeNode(2);
root.left = node2;
root.right = node3;

console.log(trimBST(root, 1, 2))