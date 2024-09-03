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

// 迭代法: 层序遍历
var countNodes = function(root) {
    let result = 0;
    if(!root) return result;
    const que = [root];

    while(que.length) {
        let length = que.length;
        for(let i = 0; i < length; i++) {
            const node = que.shift();
            node.left && que.push(node.left);
            node.right && que.push(node.right);
            result++;
        }
    }
    return result;
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