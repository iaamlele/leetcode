/**
 * @param {string[]} tokens
 * @return {number}
 */
// 内置对象eval(): 会将传入的字符串当做 JavaScript 代码进行执行。
// Math.floor() : 向下取整, 返回小于等于一个给定数字的最大整数。
// Math.ceil() : 向上取整, 返回大于等于给定数字的最小整数。
// 思路不清晰,不统一 + 难在细节处理
var evalRPN = function(tokens) {
    const stk = [];
    for(const ch of tokens) {
        if(ch === "+" || ch === "-" || ch === "*" || ch === "/") {
            let caccu2 = stk.pop();
            let caccu1 = stk.pop();     
            if(ch === "+") {
                stk.push(caccu1 + caccu2);
            }else if(ch === "-") {
                stk.push(caccu1 - caccu2);
            }else if(ch === "*") {
                stk.push(caccu1 * caccu2);
            }else if(ch === "/") {
                stk.push(caccu1 / caccu2 > 0 ? Math.floor(caccu1 / caccu2) : Math.ceil(caccu1 / caccu2));
            }
        }else {
            // push进去后统一转换成int整数
            stk.push(parseInt(ch));
        }
    }
    // 只有一个数,直接pop即可,不用join
    return stk.pop();
};

console.log(evalRPN(["4","-2","/","2","-3","-","-"]));