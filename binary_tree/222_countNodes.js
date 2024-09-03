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
function TreeNode(val ,left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 递归法:后序遍历
// a||b:只判断a的真假,真就返回a,假就返回b   a&&b:只判断a的真假,真就返回b,假就返回a
function recursion(node) {
    if(!node) return 0;

    let count = 0;
    count+=(recursion(node.left));
    count+=(recursion(node.right));

    return count + 1;
}

var countNodes = function(root) {
    return recursion(root);
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
root.left = node2;
root.right = node3;
node2.left =  node4;
node2.right = node5;
node3.left = node6;

console.log(countNodes(root));