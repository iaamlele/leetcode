/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {

    let dp = Array(target + 1).fill(0);
    dp[0] = 1;

    for(let i = 0; i <= target; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }

    return dp[target];
};
