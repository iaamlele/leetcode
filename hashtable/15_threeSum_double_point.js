/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双指针
// 怎么去重??
var threeSum = function(nums) {
    const result = [];
    if(nums.length < 3 || nums === null) {
        return nums;
    }
    nums = nums.sort((a, b) => a - b);
    // [-4, -1, -1, 0, 1, 2]
    for(let left = 0; left < nums.length; left++) {
        if(nums[left] > 0) {
            break;
        }
        if(left === 0 || nums[left] !== nums[left - 1]) {
            let right = nums.length - 1;
            let mid = left + 1;
            while(mid < right) {
                const sum = nums[left] + nums[mid] + nums[right];
                if(sum === 0) {
                    result.push([nums[left], nums[mid], nums[right]]);
                    while(mid < right && nums[mid] === nums[mid + 1]) mid++;
                    while(mid < right && nums[right] === nums[right - 1]) right--;
                    mid++;
                    right--;
                }else if(sum > 0) {
                    right--;
                }else {
                    mid++;
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));