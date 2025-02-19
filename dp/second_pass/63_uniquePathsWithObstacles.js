const uniquePathsWithObstacles = function(obstacleGrid) {
    // dp[i]代表这一行第i位总共路径数
    const lie = obstacleGrid[0].length
    const hang = obstacleGrid.length
    if(obstacleGrid[hang - 1][lie - 1] === 1 || obstacleGrid[0][0] === 1) return 0

    const dp = Array(hang).fill().map(item => Array(lie).fill(0))

    for(let i = 0; i < hang && obstacleGrid[i][0] === 0; i++) dp[i][0] = 1
    for(let i = 0; i < lie && obstacleGrid[0][i] === 0; i++) dp[0][i] = 1

    for(let i = 1; i < hang; i++) {
        for(let j = 1; j < lie; j++) {
            if(obstacleGrid[i][j] === 1) continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[hang - 1][lie - 1]
}

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))