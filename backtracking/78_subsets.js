/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const node = [];
    const recursion = function(startIndex) {
        // 还在犯这个错误! 这是数组的引用!!
        res.push([...node]); 
        if(startIndex >= nums.length) return;

        for(let i = startIndex; i < nums.length; i++) {
            node.push(nums[i]);
            recursion(i + 1);
            node.pop();
        }
    }

    recursion(0);
    return res;
};

console.log(subsets([1,2,3]));
