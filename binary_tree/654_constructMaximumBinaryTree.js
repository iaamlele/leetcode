/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 递归法: 前序遍历
// 注意读题,题中说了nums.length >= 1!
var constructMaximumBinaryTree = function(nums) {
    const recursion = function(nums) {
        // 不会写终止条件!!!!终止条件错误,导致栈溢出
        if(nums.length === 0) return null;
        if(nums.length === 1) return new TreeNode(nums.pop());
        
        // Math.max() 函数不能直接处理一个数组，而是需要将数组展开为单个元素传入, 所以不能写Math.max(nums); 要写Math.max(...nums);
        let max_num = Math.max(...nums);
        const root = new TreeNode(max_num);

        // Array.prototype.indexOf():返回数组中第一次出现给定元素的下标，如果不存在则返回 -1. 注意!返回的是下标!不是位置!!
        let determiIndex = nums.indexOf(max_num);
        
        let nums_left = nums.slice(0, determiIndex);
        let nums_right = nums.slice(determiIndex + 1);

        root.left = recursion(nums_left);
        root.right = recursion(nums_right);
        return root;
    }

    return recursion(nums);
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));