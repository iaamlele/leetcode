/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 方法一: 递归法  利用特性可知: 第一次遇到 cur节点是数值在[q, p]区间中，那么cur就是 q和p的最近公共祖先。
var lowestCommonAncestor = function(root, p, q) {
    const recuresion = function(root, p, q) {
        if(root === null) return root;

        if(root.val > p.val && root.val > q.val) {
            let left = recuresion(root.left, p, q);
            // 在这里调用递归函数的地方，把递归函数的返回值left，直接return。在二叉树：公共祖先问题中，如果递归函数有返回值，如何区分要搜索一条边，还是搜索整个树。
            // 本题就是标准的搜索一条边的写法，遇到递归函数的返回值，如果不为空，立刻返回。
            if(left !== null) return left;
        }

        if(root.val < p.val && root.val < q.val) {
            let right = recuresion(root.right, p, q);
            if(right !== null) return right;
        }

        return root;
    }

    return recuresion(root, p, q);
};

const root = new TreeNode(6);
const node2 = new TreeNode(2);
const node3 = new TreeNode(8);
const node4 = new TreeNode(0);
const node5 = new TreeNode(4);
const node6 = new TreeNode(7);
const node7 = new TreeNode(9);
const node8 = new TreeNode(3);
const node9 = new TreeNode(5);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.left = node8;
node5.right = node9;

const p = node2;
const q = node3;

console.log(lowestCommonAncestor(root, p, q))