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

var constructMaximumBinaryTree = function(nums) {
    const recursion = function(nums) {
        if(nums.length === 0) return null;

        let max_num = Math.max(nums);
        // let nums_left = 

        return root;
    }

    if(!nums) return null;
    return recursion(nums);
};

console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]));