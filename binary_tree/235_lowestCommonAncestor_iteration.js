/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 方法二: 迭代法
var lowestCommonAncestor = function(root, p, q) {
    const stk = [root];

    while(stk.length) {
        let cur = stk.shift();
        if(cur.val > p.val && cur.val > q.val) {
            stk.push(cur.left);
        }else if(cur.val < p.val && cur.val < q.val) {
            stk.push(cur.right);
        }else return cur;
    }
    
    return null;
};

const root = new TreeNode(6);
const node2 = new TreeNode(2);
const node3 = new TreeNode(8);
const node4 = new TreeNode(0);
const node5 = new TreeNode(4);
const node6 = new TreeNode(7);
const node7 = new TreeNode(9);
const node8 = new TreeNode(3);
const node9 = new TreeNode(5);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.left = node8;
node5.right = node9;

const p = node2;
const q = node3;

console.log(lowestCommonAncestor(root, p, q))