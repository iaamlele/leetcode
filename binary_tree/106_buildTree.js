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

// 思路: 切割法(思路想错了)
// 方法一: 递归
var buildTree = function(inorder, postorder) {
    // 树中为null的值不用管,创建的时候未指定会自动为null
    const recursion = function(inorder, postorder) {
        // 叶子节点, w为什么要return null?
        if(inorder.length === 0) return null;
        const rootValue = postorder.pop();
        const root = new TreeNode(rootValue);

        // 切割中序数组, 切割方法要保持不变, 左闭右开
        let delimiterIndex;
        for(delimiterIndex = 0; delimiterIndex < inorder.length; delimiterIndex++) {
            if(inorder[delimiterIndex] === rootValue) break;
        }
        let inorder_left = inorder.slice(0, delimiterIndex);
        let inorder_right = inorder.slice(delimiterIndex + 1);
        
        // 后序数组怎么切割? 中序数组大小一定是和后序数组的大小相同的, 所以后序数组可以按照切割好的左中序数组大小来切割
        let postorder_left = postorder.slice(0, delimiterIndex);
        let postorder_right = postorder.slice(delimiterIndex);

        root.left = buildTree(inorder_left, postorder_left);
        root.right = buildTree(inorder_right, postorder_right);
        return root;
    }

    if(inorder.length === 0 || postorder.length === 0) return null;
    return recursion(inorder, postorder);    
};

// const root = new TreeNode(3);
// const node2 = new TreeNode(9);
// const node3 = new TreeNode(20);
// root.left = node2;
// root.right = node3;
// const node4 = new TreeNode(15);
// const node5 = new TreeNode(7);
// node3.left = node4;
// node3.right = node5;

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20 ,3]));