/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 本题和39的区别: 1.本题candidates 中的每个数字在每个组合中只能使用一次; 2.本题数组candidates的元素是有重复的，而39.组合总和是无重复元素的数组candidates
// 本题的难点在于区别2中：集合（数组candidates）有重复元素，但还不能有重复的组合。
// 我把所有组合求出来，再用set或者map去重，这么做很容易超时！ 所以要在搜索的过程中就去掉重复组合。
// 所谓去重，其实就是使用过的元素不能重复选取 ,对"使用过"的理解-> 使用过”在这个树形结构上是有两个维度的，一个维度是同一树枝上使用过，一个维度是同一树层上使用过
// 回看一下题目，元素在同一个组合内是可以重复的，怎么重复都没事，但两个组合不能相同。所以我们要去重的是同一树层上的“使用过”，同一树枝上的都是一个组合里的元素，不用去重。
// 强调一下，树层去重的话，需要对数组排序！
// 本题思路巧妙,多复习
var combinationSum2 = function(candidates, target) {
    const result = [];
    const path = [];
    
    const used = [];
    used.length = candidates.length;
    for(let i = 0; i < used.length; i++) used[i] = false;

    // 就地升序排列
    candidates.sort((a, b) => a - b);

    const backtracking = function(candidates, target, sum, startIndex) {
        if(sum > target) return;
        if(sum === target) {
            result.push(path.slice());
            return;
        }

        for(let i = startIndex; i <= candidates.length && sum + candidates[i] <= target; i++) {
            if(i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) continue;
            sum += candidates[i];
            path.push(candidates[i]);
            used[i] = true;
            backtracking(candidates, target, sum, i + 1);
            used[i] = false;
            sum -= candidates[i];
            path.pop();
        }
    }

    backtracking(candidates, target, 0, 0);
    return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));