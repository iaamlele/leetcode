/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 仅使用startIndex去重
var combinationSum2 = function(candidates, target) {
    const result = [];
    const path = [];

    candidates.sort((a, b) => a - b);

    const backtracking = function(candidates, target, sum, startIndex) {
        if(sum > target) return;
        if(sum === target) {
            result.push(path.slice());
            return;
        }

        for(let i = startIndex; i <= candidates.length && sum + candidates[i] <= target; i++) {
            if(i > startIndex && candidates[i] === candidates[i - 1]) continue;
            sum += candidates[i];
            path.push(candidates[i]);
            backtracking(candidates, target, sum, i + 1);
            sum -= candidates[i];
            path.pop();
        }
    }

    backtracking(candidates, target, 0, 0);
    return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));