const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

readline.on('line', (line) => {
    input.push(line);
});

readline.on('close', () => {
    let [m, bagVolumn] = input[0].split(' ').map(Number); // Number的作用:string转int
    let weight = input[1].split(' ').map(Number);
    let value = input[2].split(' ').map(Number);

    let dp = Array.from({ length: m }, () => Array(bagVolumn + 1).fill(0));
    for(let i = weight[0]; i <= bagVolumn; i++) {
        dp[0][i] = value[0];
    }

    for(let i = 1; i < m; i++) { // 遍历物品
        for(let j = 0; j <= bagVolumn; j++) { // 遍历背包容量
            if(j < weight[i]) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        }
    }
    console.log(dp[m - 1][bagVolumn]);
})