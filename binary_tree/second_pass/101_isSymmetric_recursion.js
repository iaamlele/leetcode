function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const isSymmetric = function(root) {
    const recursion = function(left, right) {
        if(left === null && right === null) return true;
        else if(left === null && right !== null) return false;
        else if(right === null && left !== null) return false;
        else if(left.val !== right.val) return false;

        const outside = recursion(left.left, right.right);
        const inside = recursion(left.right, right.left);
        if(outside && inside) return true;
        else return false;
    }

    return recursion(root.left, root.right);
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(2);
root.left = node2;
root.right = node3;

const node4 = new TreeNode(3);
const node5 = new TreeNode(3);
node2.right = node4;
node3.right = node5;
console.log(isSymmetric(root));