/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length === 1) return 0;
    let res = 0;
    let curDistance = 0;
    let nextDistance = 0;
    for(let i = 0; i < nums.length; i++) {
        nextDistance = Math.max(nextDistance, i + nums[i]);
        if(i === curDistance) {
            res++;
            curDistance = nextDistance;
            if(nextDistance >= nums.length - 1) break;
        }
    }
    return res;
};

console.log(jump([2,3,1,1,4]));