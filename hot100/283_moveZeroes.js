var moveZeroes = function(nums) {
    let n = nums.length
    let left = 0, right = 0
    while(right < n) {
        if(nums[right]) {
            let tmp = nums[left]
            nums[left] = nums[right]
            nums[right] = tmp
            left++
        }
        right++
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))