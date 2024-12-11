function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var preorderTraversal = function(root) {
    const recursion = function(cur, list) {
        if(cur === null) return;
        list.push(cur.val);
        recursion(cur.left, list);
        recursion(cur.right, list);
    }
    const list = [];
    recursion(root, list);
    return list;
}
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

console.log(preorderTraversal(root));