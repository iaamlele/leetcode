/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 1) return true;
    let cover = 0;
    for(let i = 0; i <= cover; i++) {
        cover = Math.max(nums[i] + i, cover);
        if(cover >= nums.length - 1) return true;
    }
    return false;
};

console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]));