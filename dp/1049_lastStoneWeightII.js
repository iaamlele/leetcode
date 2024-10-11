/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    // 1.确定dp数组以及下标含义: dp[j]表示重量为j的背包,最多可以背最大重量为dp[j]
    // 2.确定递推公式: dp[j] = Math.max(dp[j], dp[j - stone[i]] + stone[i]);
    // 3.dp数组如何初始化: 最大容量就是所有石头重量和,30 * 1000, 因为我们要求的target只是最大重量的一半(不太理解), 所以dp数组15000大小即可
    let sum = 0;
    for(let i = 0; i < stones.length; i++) {
        sum += stones[i];
    }
    const target = Math.floor(sum / 2);

    const dp = Array(target + 1).fill(0);
    // 4.确定遍历顺序: 
    for(let i = 0; i < stones.length; i++) { // 遍历物品
        for(let j = target; j >= stones[i]; j--) { // 遍历背包
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
            console.log("j:", j, "dp[j]:", dp[j]);
        }
    }
    return (sum - dp[target]) - dp[target];
};

console.log(lastStoneWeightII([2,4,1,1]));