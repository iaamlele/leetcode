/**
 * @param {number[]} height
 * @return {number}
 */

// 方法一: 双指针 按列计算 改进
var trap = function(height) {
    if(height.length <= 2) return 0;
    const len = height.length;
    const maxLeft = [];
    const maxRight = [];

    // 记录每个柱子左边最大高度
    maxLeft[0] = [height[0]];
    for(let i = 1; i < len; i++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }

    // 记录每个柱子右边最大高度
    maxRight[len - 1] = height[len - 1];
    for(let i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }

    let sum = 0;
    for(let i = 0; i < len; i++) {
        let count = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if(count > 0) sum += count;
    }

    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));