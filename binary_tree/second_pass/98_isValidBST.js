function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

//　中序遍历
const isValidBST = function(root) {
    let pre = null;
    const recursion = function(root) {
        if(root === null) return true;

        const left = recursion(root.left);

        if(pre !== null && pre.val >= root.val) 
            return false;
        pre = root;

        const right = recursion(root.right);

        return left && right;
    }
    return recursion(root);
}

const root = new TreeNode(2);
const node2 = new TreeNode(1);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

console.log(isValidBST(root));