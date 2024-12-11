function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var rightSideView = function(root) {
    const res = [];
    if(!root) return res;
    const que = [root];
    res.push(root.val);

    while(que.length) {
        const length = que.length;
        for(let i = 0; i < length; i++) {
            const cur = que.shift();
            cur.left && que.push(cur.left);
            cur.right && que.push(cur.right);
        }
        que.length && res.push(que.at(-1).val);
    }
    return res;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

const node4 = new TreeNode(4);
node2.left = node4;

const node5 = new TreeNode(5);
node4.left = node5;

console.log(rightSideView(root));