/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a));
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 0 && k > 0) {
            nums[i]*=(-1);
            k--;
        }       
    }
    while(k > 0) {
        nums[nums.length - 1] = -nums[nums.length - 1];
        k--;
    }
    return nums.reduce((a, b) => a + b);
};

console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 5));