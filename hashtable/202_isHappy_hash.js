/**
 * @param {number} n
 * @return {boolean}
 */

// 解题思路: 题中说了会循环出现->hash判断循环
// 两种情况: 1.是快乐数,能===1； 2.不是快乐数,有环->使用hash检测环
// 代码思路: 1.找到下一个数字; 2.hash判断是否进入循环

// 优化:
// a||b:只判断a的真假,真就返回a,假就返回b   a&&b:只判断a的真假,真就返回b,假就返回a
// 回调函数:是作为参数传递到另一个函数中，然后在外部函数内调用以完成某种例行程序或操作的函数。
// Array.prototype.reduce(回调函数, 初始值)
// 修改合适的变量名
// 简化的新表达,用于初始值和后续值不一样的情况:let arr = ("" + (count || n)).split("");
var isHappy = function(n) {
    const set = new Set();
    let count;
    while(count !== 1) {
        let arr = ("" + (count || n)).split("");
        count = arr.reduce((sum, num) => sum + num * num, 0);
        if(set.has(count)) {
            return false;
        }
        set.add(count);
    }
    return true;
}

console.log(isHappy(2));