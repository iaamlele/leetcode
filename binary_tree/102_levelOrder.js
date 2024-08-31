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
 * @return {number[][]}
 */
function TreeNode(val ,left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var levelOrder = function(root) {
    const result = [];
    if(!root) return result;
    const que = [root];
    
    while(que.length) {
        let curLevel = [];
        let length = que.length; // 这个地方是动态的,所以必须单独提出来
        for(let i = 0; i < length; i++) {
            let node = que.shift();
            curLevel.push(node.val);
            node.left && que.push(node.left);
            node.right && que.push(node.right);
        }
        result.push(curLevel);        
    }
    return result; 
};

const root = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
root.left = node2;
root.right = node3;
node2.left = null;
node2.right = null;
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);
node3.left = node4;
node3.right = node5;

console.log(levelOrder(root));