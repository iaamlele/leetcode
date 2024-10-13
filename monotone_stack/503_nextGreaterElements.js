/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let sk = [];
    const len = nums.length;
    let res= Array(len).fill(-1);

    // 模拟循环
    for(let i = 0; i < len * 2; i++) {
        while(sk.length && nums[i % len] > nums[sk[sk.length - 1]]) {
            let index = sk.pop();
            res[index] = nums[i % len];
        }
        sk.push(i % len);
    }

    return res;
};

console.log(nextGreaterElements([1,2,3,4,3]));