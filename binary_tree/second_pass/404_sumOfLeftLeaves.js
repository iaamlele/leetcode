function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const sumOfLeftLeaves = function(root) {
    // 前序遍历
    const recursion = function(node) {
        if(!node) return 0;
        if(!node.left && !node.right) return 0;

        let leftValue = recursion(node.left);
        if(node.left !== null && node.left.left === null && node.left.right === null) leftValue = node.left.val;

        const rightValue = recursion(node.right);
        return leftValue + rightValue;
    }
    return recursion(root);
}

// const root = new TreeNode(3);
// const node2 = new TreeNode(9);
// const node3 = new TreeNode(20);
// root.left = node2;
// root.right = node3;
// const node4 = new TreeNode(15);
// const node5 = new TreeNode(7);
// node3.left = node4;
// node3.right = node5;

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
node2.left = node4;
node2.right = node5;

console.log(sumOfLeftLeaves(root));