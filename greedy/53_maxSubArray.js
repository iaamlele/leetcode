/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum > res) {
            res = sum;
        }
        if(sum < 0) sum = 0;
    }
    return res;
};

console.log(maxSubArray([-1,-1]));