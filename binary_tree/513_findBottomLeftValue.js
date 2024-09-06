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

// 迭代法:层序遍历
var findBottomLeftValue = function(root) {
    const result = root.val;
    const que = [root];

    while(que.length) {
        let length = que.length;
        let flag = 0;
        for(let i = 0; i < length; i++) {
            if(que[i].left !== null || que[i].right !==null) {
                flag = 1;
            }
        }
        if(flag === 1) {
            while(length--) {
                const node = que.shift();
                node.left && que.push(node.left);
                node.right && que.push(node.right);
            }
        }else if(flag === 0) {
            return que.shift().val;
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
const node7 = new TreeNode(7);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = null;
node3.left = node5;
node3.right = node6;
node4.left = null;
node4.right = null;
node5.left = node7;

console.log(findBottomLeftValue(root));