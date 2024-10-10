/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // 1.dp[i][j]代表该位置的路径数量
    // 2.dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 排除有障碍
    // 3.从左向右一行一行处理
    const hight = obstacleGrid.length;
    const weight = obstacleGrid[0].length;
    if(obstacleGrid[hight - 1][weight - 1] === 1 || obstacleGrid[0][0] === 1) return 0;

    let dp = Array(hight).fill().map(item => Array(weight).fill(0));
    for(let i = 0; i < hight && obstacleGrid[i][0] === 0; i++) dp[i][0] = 1;
    for(let i = 0; i < weight && obstacleGrid[0][i] === 0; i++) dp[0][i] = 1;

    for(let i = 1; i < hight; i++) {
        for(let j = 1; j < weight; j++) {
            if(obstacleGrid[i][j] === 1) continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[hight - 1][weight - 1];
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));