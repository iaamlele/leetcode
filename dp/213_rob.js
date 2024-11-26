/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i]: [1, i]个房间能偷窃的最高金额
// 不考虑最后一个: dp[i] = Math.max(dp[i - 2] + num[i], dp[i - 1]), dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1])
// 不考虑第一个: 
var rob = function(nums) {
    if(nums.length === 1) {
        return nums[0];
    } else if(nums.length === 2 || nums.length === 3) {
        return Math.max(...nums);
    } 

    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1])

    for(let i = 2; i < dp.length - 1; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }

    const dp2 = new Array(nums.length).fill(0);
    dp2[1] = nums[1];
    dp2[2] = Math.max(nums[1], nums[2])

    for(let i = 3; i < dp.length; i++) {
        dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1])
    }

    return Math.max(dp[nums.length - 2], dp2[nums.length - 1]);
};

console.log(rob([1,2,1,1]));