/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 迭代法:前序遍历
var isSameTree = function(p, q) {
    // 这两行顺序不能颠倒!!!
    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    const que = [p, q];

    while(que.length) {
        let length = que.length;
        for(let i = 0; i < length / 2; i++) {
            let node1 = que.shift();
            let node2 = que.shift();

            // 情况要考虑全面!!
            if(!node1 && !node2) continue;
            if((node1 === null && node2 !== null) || (node1 !== null && node2 === null) || (node1.val !== node2.val)) return false;
            
            que.push(node1.left);
            que.push(node2.left);
            que.push(node1.right);
            que.push(node2.right);
        }
    }

    return true;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
// const node3 = new TreeNode(3);
root.left = node2;
// root.right = node3;

const root2 = new TreeNode(1);
// const node22 = new TreeNode(2);
const node33 = new TreeNode(3);
root2.left = null;
root2.right = node33;

console.log(isSameTree([], []));