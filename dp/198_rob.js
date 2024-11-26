/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i]: [1, i]家，最多可以偷窃的金额为dp[i]
// dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
// dp[0] = nums[0] dp[1] = Math.max(nums[0], nums[1])
var rob = function(nums) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[nums.length - 1];
};

console.log(rob([2, 7, 9, 3, 1]));