const climbStairs = function(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    let dp = [1, 2]
    for(let i = 3; i <= n; i++) {
        const tmp = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = tmp
    }
    return dp[1]
}
console.log(climbStairs(3));