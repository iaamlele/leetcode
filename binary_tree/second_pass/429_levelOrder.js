function TreeNode(val, children) {
    this.val = (val === undefined ? 0 : val);
    this.children = (children === undefined ? [] : children);
}

var levelOrder = function(root) {
    const res = [];
    if(!root) return res;
    res.push([root.val]);
    const que = [root];

    while(que.length) {
        const length = que.length;
        const curLevel = [];

        for(let i = 0; i < length; i++) {
            const cur = que.shift();
            const child_len = cur.children.length;
            console.log(cur, child_len);

            for(let j = 0; j < child_len; j++) {
                const cur_child = cur.children[j]
                console.log(cur_child);
                if(cur_child) {
                    que.push(cur_child);
                    curLevel.push(cur_child.val);
                }
            }
        }
        if(curLevel.length !== 0) res.push(curLevel);
    }

    return res;
}

const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node3 = new TreeNode(3, [node5, node6]);

const node2 = new TreeNode(2);
const node4 = new TreeNode(4);
const root = new TreeNode(1, [node3, node2, node4]);

console.log(levelOrder(root));