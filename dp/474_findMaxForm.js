/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// dp[i][j]: 最多有i个0和j个1的strs的最大子集的大小为dp[i][j]
var findMaxForm = function(strs, m, n) {
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
    let numOfZeros, numOfOnes;

    for(let str of strs) {
        numOfZeros = 0;
        numOfOnes = 0;

        for(let c of str) {
            if(c === '0') numOfZeros++;
            else numOfOnes++;
        }

        for(let i = m; i >= numOfZeros; i--) {
            for(let j = n; j >= numOfOnes; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
            }
        }
    }

    return dp[m][n];
};