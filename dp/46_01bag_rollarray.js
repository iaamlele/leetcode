const bag = function(m ,n, weight, value) {
    const dp = Array(n + 1).fill(0);
    for(let i = 0; i < m; i++) { // 遍历物品
        for(let j = n; j > 0; j--) { // 遍历背包容量
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
        }
    }
    return dp[n];
}

// m:材料种类, n:行李空间, 材料所占空间, 材料的价值
console.log(bag(3, 4, [1, 3, 4], [15, 20, 30]));