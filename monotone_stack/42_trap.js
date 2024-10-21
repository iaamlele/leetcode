/**
 * @param {number[]} height
 * @return {number}
 */

// 方法一: 双指针 按列计算
var trap = function(height) {
    let sum = 0;
    for(let i = 0; i < height.length; i++) {
        if(i === 0 || i === height.length - 1) continue;

        // 分别寻找左右两边最高的柱子
        let rHeight = height[i];
        let lHeight = height[i];
        for(let j = i + 1; j < height.length; j++) {
            if(height[j] > rHeight) rHeight = height[j];
        }

        for(let j = 0; j < i; j++) {
            if(height[j] > lHeight) lHeight = height[j];
        }

        let h = Math.min(lHeight, rHeight) - height[i];
        if(h > 0) sum+=h;
    }
    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));