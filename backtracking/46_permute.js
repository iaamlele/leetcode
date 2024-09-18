/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const path = [];

    let used = [];
    used.length = nums.length;
    for(let i = 0; i < used.length; i++) used[i] = false;

    const backtracking = function(used) {
        if(path.length === nums.length) {
            res.push(path.slice());
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if(used[i] === true) continue;
            used[i] = true;
            path.push(nums[i]);
            backtracking(used);
            used[i] = false;
            path.pop();
        }
    }

    backtracking(used);
    return res;
};

console.log(permute([1, 2, 3]));