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
 * @param {number} targetSum
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 递归法-前序遍历
let hasPathSum = function (root, targetsum) {
    // 递归法
    const traversal = (node, cnt) => {
      // 遇到叶子节点，并且计数为0
      if (cnt === 0 && !node.left && !node.right) return true;
      // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
      if (!node.left && !node.right) return false;
  
      //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
      if (node.left && traversal(node.left, cnt - node.left.val)) return true;
      //  右（空节点不遍历）
      if (node.right && traversal(node.right, cnt - node.right.val)) return true;
      return false;
    };
    if (!root) return false;
    return traversal(root, targetsum - root.val);
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
root.left = node2;
// const node3 = new TreeNode(8);
// const node4 = new TreeNode(11);
// const node5 = new TreeNode(13);
// const node6 = new TreeNode(4);
// const node7 = new TreeNode(7);
// const node8 = new TreeNode(2);
// const node9 = new TreeNode(1);
// root.left = node2;
// root.right = node3;
// node2.left = node4;
// node2.right = null;
// node3.left = node5;
// node3.right = node6;
// node4.left = node7;
// node4.right = node8;
// node6.right = node9;

console.log(hasPathSum(root, 3));