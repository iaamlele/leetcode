/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    if(nums.length < 4 || nums === null) return [];
    nums = nums.sort((a, b) => (a - b));
    const result = [];

    for(let one = 0; one < nums.length; one++) {
        // if(nums[one] > target) break;
        if(one === 0 || nums[one] !== nums[one - 1]) {
            for(let two = one + 1; two < nums.length; two++) {
                if(two === one + 1 || nums[two] != nums[two - 1]) {
                    let three = two + 1;
                    let four = nums.length - 1;
                    while(three < four) {
                        const sum = nums[one] + nums[two] + nums[three] + nums[four];
                        if(sum === target) {
                            result.push([nums[one], nums[two], nums[three], nums[four]]);
                            while(three < four && nums[three] === nums[three + 1]) three++;
                            while(three < four && nums[four] === nums[four - 1]) four--;
                            three++;
                            four--;
                        }else if(sum > target) {
                            four--;
                        }else {
                            three++;
                        }
                    }
                }
                
            }
        }
        
    }
    return result;
}

console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11));