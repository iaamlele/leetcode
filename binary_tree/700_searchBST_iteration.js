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

// 迭代法,前序遍历-使用二叉搜索树特征
var searchBST = function(root, val) {
    while(root !== null) {
        console.log(root, root.val);
        if(root.val === val) return root;
        if(root.val > val) root = root.left;
        // 这里要用else if,细节, 不能直接用if,防止root是null后再次判断!
        else if(root.val < val) root = root.right;
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