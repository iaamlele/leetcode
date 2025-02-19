const numTrees = function(n) {
    const dp = Array(n + 1).fill(0)
    dp[0] = 1
    dp[1] = 1

    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]
        }
    }

    console.log(dp)
    return dp[n]
}
console.log(numTrees(5))