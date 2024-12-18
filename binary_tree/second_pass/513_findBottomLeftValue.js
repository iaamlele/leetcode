function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 层序遍历
const findBottomLeftValue = function(root) {
    let res = 0;
    if(!root) return res;
    const que = [root];

    while(que.length) {
        const len = que.length;
        for(let i = 0; i < len; i++) {
            const cur = que.shift();
            if(i === 0) res = cur.val;
            cur.left && que.push(cur.left);
            cur.right && que.push(cur.right);
        }
        
    }
    return res;
}

const root = new TreeNode(2);
const node2 = new TreeNode(1);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

console.log(findBottomLeftValue(root));