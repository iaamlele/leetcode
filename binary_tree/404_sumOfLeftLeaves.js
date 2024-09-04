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

// 左叶子是一个既位于父节点的左边又没有子节点的节点
var sumOfLeftLeaves = function(root) {
    if(!root) return root;
    let res = 0;
    const que = [root];

    while(que.length) {
        let length = que.length;
        while(length--) {
            const node = que.shift();
            node.left && que.push(node.left);
            if(node.left && node.left.left === null && node.left.right === null) res+=(node.left.val);
            node.right && que.push(node.right);
        }
    }

    return res;
};

const root = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);
root.left = node2;
root.right = node3;
node3.left = node4;
node3.right = node5;

console.log(sumOfLeftLeaves(root));