/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var postorderTraversal = function(root) {
    const result = [];
    if(!root) return result;
    const stk = [root];

    let cur = null;
    while(stk.length) {
        cur = stk.at(-1);
        if(cur !== null) {
            stk.push(null);
            if(cur.right) stk.push(cur.right);
            if(cur.left) stk.push(cur.left);
        }else {
            stk.pop();
            result.push(stk.pop().val);
        }
    }

    return result;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

console.log(postorderTraversal(root));