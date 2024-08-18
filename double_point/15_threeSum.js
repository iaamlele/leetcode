/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //思路混乱, 一堆冗在一起,先思考清楚,再写
    nums = nums.sort((a, b) => a - b);
    if(nums.length < 3 && nums === null) return nums;
    const result = [];

    for(let one = 0; one < nums.length; one++) {
        if(nums[one] > 0) break;
        if(one === 0 || nums[one] !== nums[one - 1]) {
            let two = one + 1;
            let three = nums.length - 1;
            while(two < three) {
                const sum = nums[one] + nums[two] + nums[three];
                if(sum === 0) {
                    result.push([nums[one], nums[two], nums[three]]);
                    while(two < three && nums[two] === nums[two + 1]) two++;
                    while(two < three && nums[three] === nums[three - 1]) three--;
                    two++;
                    three--;
                }else if(sum > 0) {
                    three--;
                }else {
                    two++;
                }
            }
        }
        
    }
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));