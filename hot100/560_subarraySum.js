const subarraySum = function (nums, k) {
    let res = 0;
    let right = 0;
    for (let i = 0; i < nums.length; i++) {
        right = i;
        let sum = 0;
        while (right < nums.length) {
            sum += nums[right];
            if (sum === k) {
                res++;
            }
            right++;
        }
    }
    return res;
}
console.log(subarraySum([1, 1, 1], 2));