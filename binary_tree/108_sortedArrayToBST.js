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

// 方法一: 递归法, 抄的, 不断中间分割，然后递归处理左区间，右区间，也可以说是分治
var sortedArrayToBST = function(nums) {
    const traversal = function(nums, left, right) {
        if(left > right) return null;

        // 如果这样写: int mid = (left + right) / 2; 会数值越界，例如left和right都是最大int，这么操作就越界了，在二分法中尤其需要注意！
        let mid = Math.floor(left + ((right - left) / 2));
        const root = new TreeNode(nums[mid]);
        root.left = traversal(nums, left, mid - 1);
        root.right = traversal(nums, mid + 1, right);
        
        return root;
    }

    const root = traversal(nums, 0, nums.length - 1);
    return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));