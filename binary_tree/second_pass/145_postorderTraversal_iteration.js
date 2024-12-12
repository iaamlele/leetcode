function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const postorderTraversal = function(root, res = []) {
    if(!root) return res;
    const sk = [root];
    let cur = null;

    while(sk.length) {
        cur = sk.pop();
        res.push(cur.val);
        if(cur.left) sk.push(cur.left);
        if(cur.right) sk.push(cur.right);
    }

    return res.reverse();
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

console.log(postorderTraversal(root));