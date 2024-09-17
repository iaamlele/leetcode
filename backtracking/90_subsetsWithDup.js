/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 关于回溯算法中的去重问题，在40.组合总和II中已经详细讲解过了，和本题是一个套路。
var subsetsWithDup = function(nums) {
    const res = [];
    const path = [];
    nums.sort((a, b) => a - b);

    let used = [];
    used.length = nums.length;
    for(let i = 0; i < used.length; i++) used[i] = false;

    const backtracking = function(startIndex, used) {
        // console.log(path);
        res.push([...path]);

        for(let i = startIndex; i < nums.length; i++) {
            // used[i - 1] == true，说明同一树枝candidates[i - 1]使用过
            // used[i - 1] == false，说明同一树层candidates[i - 1]使用过
            // 而我们要对同一树层使用过的元素进行跳过
            if(i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue;
            path.push(nums[i]);
            used[i] = true;
            backtracking(i + 1, used);
            used[i] = false;
            path.pop();
        }
    }

    backtracking(0, used);
    return res;
};

console.log(subsetsWithDup([1, 2, 2]));