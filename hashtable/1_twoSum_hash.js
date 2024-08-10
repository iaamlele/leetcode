/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i];
        }else {
            hash[nums[i]] = i;
        }
    }
};
const nums = [3, 3];
const target = 6;
console.log(twoSum(nums, target));