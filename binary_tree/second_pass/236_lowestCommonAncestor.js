function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const lowestCommonAncestor = function(root, p, q) {
    const recursion = function(root, p , q) {
        if(root === null || root === p || root === q) return root;

        const left = recursion(root.left, p, q);
        const right = recursion(root.right, p, q);
        if(left !== null && right !== null) return root;

        if(left === null && right !== null) return right;
        else if(left !== null && right === null) return left;
        else return null;
    }
    return recursion(root, p ,q);
}

const root = new TreeNode(3);
const node2 = new TreeNode(5);
const node3 = new TreeNode(1);
const node4 = new TreeNode(6);
const node5 = new TreeNode(2);
const node6 = new TreeNode(0);
const node7 = new TreeNode(8);
const node8 = new TreeNode(7);
const node9 = new TreeNode(4);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.left = node8;
node5.right = node9;

const p = node2;
const q = node3;

console.log(lowestCommonAncestor(root, p, q));
