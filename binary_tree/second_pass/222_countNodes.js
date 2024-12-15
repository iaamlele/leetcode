function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right  = (right === undefined ? null : right);
}

var countNodes = function(root) {
    let res = 0;
    if(!root) return res;
    const que = [root];

    while(que.length) {
        const cur = que.shift();
        res++;
        cur.left && que.push(cur.left);
        cur.right && que.push(cur.right);
    }
    return res;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
node2.left = node4;
node2.right = node5;
node3.left = node6;

console.log(countNodes(root));