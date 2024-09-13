/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const path = [];

    const backtracking = function(candidates, target, sum, startIndex) {        
        if(sum > target) return;
        if(sum === target) {
            result.push(path.slice());
            return;
        }

        for(let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i];
            path.push(candidates[i]);
            backtracking(candidates, target, sum, i);
            sum -= candidates[i];
            path.pop();
        }
    }

    backtracking(candidates, target, 0, 0);
    return result;    
};

console.log(combinationSum([2, 3, 6, 7], 7));