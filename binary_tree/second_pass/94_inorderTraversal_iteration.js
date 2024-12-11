function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var inorderTraversal = function(root, res = []) {
    if(!root) return res;
    const sk = [];
    let cur = root;

    while(cur != null || sk.length !== 0) {
        if(cur != null) {
            sk.push(cur);
            cur = cur.left;
        } else {
            cur = sk.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return res;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

console.log(inorderTraversal(root));