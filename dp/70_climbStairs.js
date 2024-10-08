/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    const dp = [1, 2]
    for(let i = 2; i < n; i++) {
        let sum = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = sum
    }
    return dp[1]
};

console.log(climbStairs(3))