/**
 * @param {string} s
 * @return {string}
 */

// 不需要定义两个栈,string就可以自己当栈
// 如果有多个判断,其中包括length !=== 0,可以写成
// 有问题:像这种就不对:azxxxzy
var removeDuplicates = function(s) {
    const stk = [];
    for(const ch of s) {
        if(stk.length && stk[stk.length - 1] === ch) {
            stk.pop();
        }else {
            stk.push(ch);
        }
    }
    return stk.join("");;
};

console.log(removeDuplicates("azxxzy"));