/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const stk = [];
    let len = nums.length - k + 1;
    while(len) {
        var max_num = nums[0];
        for(let i = 0; i < k; i++) {
            // console.log(max_num, nums[i], Math.max(max_num, nums[i]));
            max_num = Math.max(max_num, nums[i]);
        }
        stk.push(max_num);
        nums.shift();
        len--;
    }
    
    return stk;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));