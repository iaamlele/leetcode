const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []

readline.on('line', (line) => {
    input.push(line)
})

readline.on('close', () => {
    let [m, bagVolum] = input[0].split(' ').map(Number)
    let weight = input[1].split(' ').map(Number)
    let value = input[2].split(' ').map(Number)

    let dp = Array(m).fill().map(item => Array(bagVolum + 1).fill(0))  
    
    for(let i = weight[0]; i < bagVolum; i++) {
        dp[0][i] = value[0]
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j <= bagVolum; j++) {
            if(j < weight[i]) dp[i][j] = dp[i - 1][j]
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
        }
    }
    console.log(dp[m - 1][bagVolum])
})