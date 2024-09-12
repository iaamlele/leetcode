/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const path = [];

    const backtracking = function(k, n, startIndex) {
        let sum = 0; 
        path.forEach(item => {
            sum += item;
        })

        // 剪枝
        if(sum > n) return;
        if(sum === n && path.length === k) {
            result.push(path.slice());
            return;
        }

        // 剪枝
        for(let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            path.push(i);
            backtracking(k, n, i + 1);
            path.pop();
        }
    }

    backtracking(k, n, 1);
    return result;
};

console.log(combinationSum3(3, 7));