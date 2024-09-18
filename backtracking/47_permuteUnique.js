/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 一般来说：组合问题和排列问题是在树形结构的叶子节点上收集结果，而子集问题就是取树上所有节点的结果
var permuteUnique = function(nums) {
    // 要去重->所以要排序
    nums.sort((a, b) => a - b);
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
            // used[i - 1] == true，说明同一树枝nums[i - 1]使用过
            // used[i - 1] == false，说明同一树层nums[i - 1]使用过
            // 如果同一树层nums[i - 1]使用过则直接跳过
            if(i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue;
            if(used[i] === false) {
                used[i] = true;
                path.push(nums[i]);
                backtracking(used);
                used[i] = false;
                path.pop();
            }
        }
    }

    backtracking(used);
    return res;
};

console.log(permuteUnique([1, 1, 2]));