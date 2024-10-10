/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 1.dp[i] 表示i个不同元素节点组成二叉搜索树的个数为dp[i]
    const dp = Array(n + 1).fill(0);
    // 2.递推公式: dp[i] += dp[j - 1] * dp[i - j];
    // 3.初始化: dp[0] = 1;
    dp[0] = 1;
    // 4.遍历顺序:
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};

console.log(numTrees(5));