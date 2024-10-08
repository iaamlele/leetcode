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
 * @param {number} val
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right = undefined ? null : right);
}

// 迭代法,前序遍历
// 注意:当没有找到匹配项的时候,题目给的是返回[],实际上是返回null
var searchBST = function(root, val) {
    if(!root) return [];
    const que = [root];

    while(que.length) {
        const node = que.shift();
        if(node.val === val) return node;

        node.left && que.push(node.left);
        node.right && que.push(node.right);
    }

    return null;
};

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(7);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(searchBST(root, 2));