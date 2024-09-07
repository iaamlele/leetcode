/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : left);
}

// 方法一: 递归
var buildTree = function(preorder, inorder) {
    const recursion = function(preorder, inorder) {
        if(preorder.length === 0) return null;
        const rootValue = preorder.shift();
        const root = new TreeNode(rootValue);

        let determiIndex;
        for(determiIndex = 0; determiIndex < inorder.length; determiIndex++) {
            if(inorder[determiIndex] === rootValue) break;
        }

        let inorder_left = inorder.slice(0, determiIndex);
        let inorder_right = inorder.slice(determiIndex + 1);
        let preorder_left = preorder.slice(0, determiIndex);
        let preorder_right = preorder.slice(determiIndex);

        root.left = recursion(preorder_left, inorder_left);
        root.right = recursion(preorder_right, inorder_right);

        return root;
    }

    if(preorder.length === 0 || inorder.length === 0) return null;
    return recursion(preorder, inorder);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));