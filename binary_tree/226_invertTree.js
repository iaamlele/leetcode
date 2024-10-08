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
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var invertTree = function(root) {
    if(!root) return root;
    const que = [root];

    while(que.length) {
        let length = que.length;
        let flag = 0;
        for(let i = 0; i < length; i++) {
            const node = que.shift();
            // &&左右是表达式必须用()括起来
            node.left && que.push(node.left) && (flag = 1);
            node.right && que.push(node.right) && (flag = 1);
            flag && ([node.left, node.right] = [node.right, node.left]);
        }
    }
    
    return root;
};

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(7);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
node2.left = node4;
node2.right = node5;
const node6 = new TreeNode(6);
const node7 = new TreeNode(9);
node3.left = node6;
node3.right = node7;

console.log(invertTree(root));