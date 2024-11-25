var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    for(let j = 1; j <= n; i++) { // 背包
        for(let i = 1; i <= 2; i++) { // 物品
            if(j - i >= 0) dp[j] = dp[j] + dp[j - i];
        }
    }
    return dp[n];
}