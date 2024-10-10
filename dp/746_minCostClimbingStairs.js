/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // dp[i] 表示到达台阶i的最低花费
    const dp = []
    dp[0] = 0
    dp[1] = 0
    for(let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[cost.length]
};

console.log(minCostClimbingStairs([10,15,20]))