const integerBreak = function(n) {
    // dp[i]: 分拆数字i，可以得到的最大乘积为dp[i]
    const dp = Array(n + 1).fill(0)
    dp[2] = 1

    for(let i = 3; i <= n; i++) {
        for(let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j)
        }
    }
    return dp[n]
}

console.log(integerBreak(10));