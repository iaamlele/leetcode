function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const sortedArrayToBST = function(nums) {
    // []左闭右闭区间
    const recursion = function(nums, left, right) {
        if(left > right) return null;

        // 注意：const mid = (left + right) / 2;这么写其实有一个问题，就是数值越界，例如left和right都是最大int，这么操作就越界了，在二分法 (opens new window)中尤其需要注意！
        const mid = Math.floor(left + ((right - left) / 2));
        const root = new TreeNode(nums[mid]);
        root.left = recursion(nums, left, mid - 1);
        root.right = recursion(nums, mid + 1, right);
        return root;
    }
    
    return recursion(nums, 0, nums.length - 1);
}

console.log(sortedArrayToBST([-10,-3,0,5,9]));