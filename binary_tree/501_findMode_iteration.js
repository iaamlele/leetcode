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
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 迭代法-中序遍历 + 在栈上求最大众数
// 迭代法的中序遍历不熟
var findMode = function(root) {
    let res = [];
    let stk = [];
    let cur = root;
    let pre = null;
    let count = 0;
    let maxCount = 1;
    while(cur !== null || stk.length) {
        if(cur !== null) {
            stk.push(cur);
            cur = cur.left;
        }else {
            cur = stk.pop();

            if(pre === null) { // 第一个节点
                count = 1;
            }else if(pre.val === cur.val) {
                count++;
            }else {
                count = 1;
            }
            pre = cur;

            if(count === maxCount) {
                res.push(cur.val);
            }

            if(count > maxCount) {
                maxCount = count;
                res = [];
                res.push(cur.val);
            }

            cur = cur.right;
        }
        
    }
    return res;
};

const root = new TreeNode(1);
const node2 = new TreeNode(1);
root.left = node2;
// const node3 = new TreeNode(2);
// root.right = node2;
// node2.left = node3;

console.log(findMode(root));