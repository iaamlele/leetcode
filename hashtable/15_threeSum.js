/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 暴力法不知道如何去重
// 两层for循环+hash确定第三个值,不知道选什么hash结构,也不知道如何去重

//超时
var threeSum = function(nums) {
    const result = [];
    nums = nums.sort((a, b) => a - b);// 为什么这样表达可以排序??
    
    for(let left = 0; left < nums.length; left++) {
        if(left === 0 || nums[left] !== nums[left - 1]) {
            for(let mid = left + 1; mid < nums.length; mid++) {
                if(mid === left + 1 || nums[mid] !== nums[mid - 1]) {
                    for(let right = mid + 1; right < nums.length; right++) {
                        if(right === mid + 1 || nums[right] != nums[right - 1]) {
                            if(nums[left] + nums[mid] + nums[right] === 0) {
                                result.push([nums[left], nums[mid], nums[right]]);
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));