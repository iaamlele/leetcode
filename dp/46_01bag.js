const bag = function(m ,n, weight, value) {
    const bagVolumn = n + 1;

    // 1.确定dp数组及其下表含义: dp[i][j]表示从下标为[0-i]的物品里任意取，放进容量为j的背包，价值总和最大是多少
    // 2.确定递推公式: dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + vlaue[i]);
    // 3. dp数组如何初始化: dp[i][0]全部初始化为0, dp[0][j]分两段, 背包重量bagValue>=weight[0]的部分初始化为value[0], bagValue<weight[0]的地方初始化为0
    const dp = Array(m).fill().map(item => Array(bagVolumn).fill(0));
    for(let i = weight[0]; i < bagVolumn; i++) {
        dp[0][i] = value[0];
    }

    // 4.确定遍历顺序: 先物品再背包重量
    for(let i = 1; i < weight.length; i++) { // 遍历物品
        for(let j = 0; j < bagVolumn; j++) { // 遍历背包容量
            if(j < weight[i]) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        }
    }
    
    return dp[m - 1][n];
}

// m:材料种类, n:行李空间, 材料所占空间, 材料的价值
console.log(bag(3, 4, [1, 3, 4], [15, 20, 30]));