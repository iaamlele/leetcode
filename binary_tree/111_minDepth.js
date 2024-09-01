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

var minDepth = function(root) {
    let min = 0;
    if(!root) return min;
    const que = [root];

    while(que.length) {
        let length = que.length;
        min++;
        for(let i = 0; i < length ; i++) {
            const node = que.shift();
            if(!node.left && !node.right) return min;
            node.left && que.push(node.left);
            node.right && que.push(node.right);
        }
        
    }
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

console.log(minDepth(root));