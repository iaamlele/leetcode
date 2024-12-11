function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var levelOrder = function(root) {
    const res = [];
    if(!root) return res;
    const que = [root];
    let cur = null;

    while(que.length) {
        let length = que.length;
        const curLevel = [];
        for(let i = 0; i < length; i++) {
            cur = que.shift();
            curLevel.push(cur.val);
            cur.left && que.push(cur.left);
            cur.right && que.push(cur.right);
        }
        res.push(curLevel);
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

console.log(levelOrder(root));