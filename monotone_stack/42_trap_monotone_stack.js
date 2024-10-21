/**
 * @param {number[]} height
 * @return {number}
 */

// 方法二: 单调栈, 按照行计算的, 栈要保持的顺序: 从栈顶到栈底->从小到大; 栈中保存下标
var trap = function(height) {
    const sk = [0];
    let sum = 0;

    // 其实就是栈顶和栈顶的下一个元素以及要入栈的元素，三个元素来接水！
    for(let i = 1; i < height.length; i++) {
        // 情况一: 当前遍历的元素高度小于栈顶元素的高度 height[i] < height[sk.top], 就把这个元素加入
        if(height[i] < height[sk[sk.length - 1]]) {
            sk.push(i);
        }
        // 情况二: 当前遍历的元素高度等于栈顶元素的高度 height[i] == height[sk.top], 更新栈顶元素，因为遇到相相同高度的柱子，需要使用最右边的柱子来计算宽度
        if(height[i] === height[sk[sk.length - 1]]) {
            sk.pop();
            sk.push(i);
        }else {
            // 情况三: 当前遍历的元素高度大于栈顶元素的高度 height[i] > height[sk.top], 此时就出现凹槽了
            while(sk.length !== 0 && height[i] > height[sk[sk.length - 1]]) {
                let mid = sk[sk.length - 1];
                sk.pop();
                if(sk.length !== 0) {
                    let h = Math.min(height[sk[sk.length - 1]], height[i]) - height[mid];
                    let w = i - sk[sk.length - 1] - 1;
                    sum += h * w;
                }
            }
            sk.push(i);
        }
        
    }
    return sum;
};

console.log(trap([4,2,0,3,2,5]));