function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var maxDepth = function(root) {
    let res = 0;
    if(!root) return res;
    const que = [root];

    while(que.length) {
        const length = que.length;
        res++;
        for(let i = 0; i < length; i++) {
            const cur = que.shift();
            cur.left && que.push(cur.left);
            cur.right && que.push(cur.right);
        }
    } 
    return res;
}

const root = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);
node3.left = node4;
node3.right = node5;

console.log(maxDepth(root));