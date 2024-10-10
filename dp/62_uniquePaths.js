/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 1.dp[i][j] 表示该位置的路径数量
    // 2.dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    // 3.dp数组初始化

    // 使用new Array创建二维数组
    let dp = new Array(m);
    for(let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(0);
    }
    // 方法二创建二维数组:const dp = Array(m).fill().map(item => Array(n))
    // fill() 方法用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为 array.length）内的全部元素。它返回修改后的数组。

    for(let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for(let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    
    //4.便利顺序:从左往右一层一层遍历
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }
    return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 2));