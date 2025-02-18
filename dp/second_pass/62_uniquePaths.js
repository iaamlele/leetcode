const uniquePaths = function(m, n) {
    if(m === 1 && n === 1) return 1
    // dp[i]代表这一行第i位总共路径数
    const dp = [0]
    for(let i = 1; i < n; i++) {
        dp[i] = 1
    }
    for(let j = 1; j < m; j++) {
        dp[0] = 1
        for(let i = 1; i < n; i++) {
            dp[i] = dp[i - 1] + dp[i]
        }
    }
    return dp[dp.length - 1]
}

console.log(uniquePaths(3, 7))