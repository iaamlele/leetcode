function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const invertTree = function(root) {
    const res = [];
    if(!root) return root;
    const que = [root];

    while(que.length) {
        const length = que.length;

        for(let i = 0; i < length; i++) {
            const cur = que.shift();
            if(cur.left && cur.right) {
                const left = cur.left;
                cur.left = cur.right;
                cur.right = left;
            }
            cur.left && que.push(cur.left);
            cur.right && que.push(cur.right);
        }
    }
    return root;
}

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(7);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
node2.left = node4;
node2.right = node5;
const node6 = new TreeNode(6);
const node7 = new TreeNode(9);
node3.left = node6;
node3.right = node7;

console.log(invertTree(root));