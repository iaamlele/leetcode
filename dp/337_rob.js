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
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var rob = function(root) {
    // 后序遍历
    const postOorder = (node) => {
        if(!node) return [0, 0];

        const left = postOorder(node.left);
        const right = postOorder(node.right);
        
        const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        const Do = node.val + left[0] + right[0];

        return [DoNot, Do];
    }

    const res = postOorder(root);
    return Math.max(...res);
};

const root = new TreeNode(3);
const node2 = new TreeNode(4);
const node3 = new TreeNode(5);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
node2.left = node4;
node2.right = node5;
const node6 = new TreeNode(1);
node3.right = node6;

console.log(rob(root));