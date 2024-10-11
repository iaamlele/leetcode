/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) sum += nums[i];
    if (sum & 1) return false;
    
    // 1.确定dp数组及其下标: dp[j]表示 背包总容量（所能装的总重量）是j，放进物品后，背的最大重量为dp[j]
    // 2.确定递推公式: d[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    const dp = Array(sum + 1).fill(0);
    for(let i = 0; i < nums.length; i++) {
        for(let j = sum / 2; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            if(dp[j] === sum / 2) return true;
        }
    }

    return dp[sum / 2] === sum / 2;
};

console.log(canPartition([1,2,3,5]));