/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双指针
// 未去重,怎么去重??
var threeSum = function(nums) {
    const result = [];
    nums = nums.sort((a, b) => a - b);
    
    for(let left = 0; left < nums.length; left++) {
        if(left === 0 || nums[left] !== nums[left - 1]) {
            let right = nums.length - 1;
            for(let mid = left + 1; mid < nums.length; mid++) {
                if(mid === left + 1 || nums[mid] !== nums[mid - 1]) {
                    while(nums[left] + nums[mid] + nums[right] > 0 || right > mid) {
                        right-=1;
                    }
                    if(nums[left] + nums[mid] + nums[right] === 0) {
                        result.push([nums[left], nums[mid], nums[right]]);
                    }
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));