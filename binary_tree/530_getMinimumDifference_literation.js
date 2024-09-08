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
    this.right = (right = undefined ? null : right);
}

// 方法三: 迭代法-中序遍历..不太熟,好抽象..
var getMinimumDifference = function(root) {
    // stk里面不放东西, 中序遍历,先不放是对的
    const stk = [];
    let cur = root;
    let pre = null;
    let res = Infinity;

    // 这里先cur再stk.length,确保即使 cur 到达空节点，但栈中可能仍有未处理的节点，所以不会提前结束循环。
    while(cur || stk.length) {
        if(cur) {
            stk.push(cur);
            cur = cur.left; // 左
        }else {
            cur = stk.pop();
            if(pre) res = Math.min(res, cur.val - pre.val); // 中
            pre = cur;
            cur = cur.right; // 右
        }
    }

    return res;
};

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(6);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(getMinimumDifference(root));
