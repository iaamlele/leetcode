/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var preorderTraversal = function(root) {
    const result = [];
    if(!root) return result;
    const stk = [root];

    let cur = null;
    while(stk.length) {
        cur = stk.at(-1);
        // console.log(cur, stk, result);
        if(cur !== null) {
            stk.pop();
            if(cur.right) stk.push(cur.right);
            if(cur.left) stk.push(cur.left);
            stk.push(cur);
            stk.push(null);
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
const node4 = new TreeNode(4);
root.right = node2;
node2.left = node3;
node2.right = node4;

console.log(preorderTraversal(root));