/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    // 先遍历物品，再遍历背包
    for(let i = 1; i**2 <= n; i++) {
        let val = i**2;
        for(let j = val; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - val] + 1);
        }
    }
    return dp[n];
};