/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 本题求自增子序列，是不能对原数组进行排序的, 所以不能使用之前的去重逻辑！
var findSubsequences = function(nums) {
    const res = [];
    const path = [];

    const backtracking = function(startIndex) {
        // 不会写终止条件...
        if(path.length > 1) res.push(path.slice());

        let uset = [];
        for(let i = startIndex; i < nums.length; i++) {
            if((path.length > 0 && nums[i] < path[path.length - 1]) || uset[nums[i]]) continue;

            path.push(nums[i]);
            uset[nums[i]] = true;
            backtracking(i + 1);
            path.pop();
        }
    }

    backtracking(0);
    return res;
};

console.log(findSubsequences([4, 6, 7, 7]));