/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((a, b) => a + b);

    if(Math.abs(target) > sum) {
        return 0;
    }

    const halfSUm = (sum + target) / 2;

    let dp = new Array(halfSUm + 1).fill(0);
    dp[0] = 1;

    for(let i = 0; i < nums.length; i++) {
        for(let j = halfSUm; j >=nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    return dp[halfSUm];
};