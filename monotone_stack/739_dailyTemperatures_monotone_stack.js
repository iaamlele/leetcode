/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const sk = [0];
    const len = temperatures.length;
    const res = Array(len).fill(0);
    // Array.prototype.at(): at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
    // 注意,at后面是()不是[]
    for(let i = 1; i < len; i++) {
        const top = sk.at(-1);
        // const top = sk[sk.length - 1];
        if(temperatures[i] <= temperatures[top]) {
            sk.push(i);
        }else{
            // 注意!这里必须动态获取栈顶元素:temperatures[sk[sk.length - 1]],不能写成temperatures[top]
            while(sk.length && temperatures[i] > temperatures[sk[sk.length - 1]]) {
                const top = sk.pop();
                res[top] = i - top;
            }
            sk.push(i);
        }
    }
    return res;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));