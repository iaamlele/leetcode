/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    // 1.dp[i]的含义: 分拆数字i, 可以得到的最大乘积为dp[i]
    const dp = Array(n + 1).fill(0);
    // 2.递推公式: dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    // 3.dp初始化: dp[2] = 1
    dp[2] = 1;
    // 4.确定遍历顺序: 从前往后
    for(let i = 3; i <= n; i++) {
        // 拆分一个数n 使之乘积最大，那么一定是拆分成m个近似相同的子数相乘才是最大的。那么 j 遍历，只需要遍历到 n/2 就可以，后面就没有必要遍历了，一定不是最大值。
        for(let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
        }
    }
    // 5.举例
    return dp[n];
};

console.log(integerBreak(10));