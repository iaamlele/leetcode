/**
 * @param {string} s
 * @return {boolean}
 */
// 分情况: 1. 左括号多余；2.没有多余括号,但括号类型没有匹配上; 3.右括号多余; 4.没有多余括号,且匹配上了 
var isValid = function(s) {
    const myStack1 = Array.from(s);
    const myStack2 = [];
    while(myStack1.length !== 0) {
        const is_right = myStack1[myStack1.length - 1] === ']' || myStack1[myStack1.length - 1] === ')' || myStack1[myStack1.length - 1] === '}';
        if(!is_right) {
            return false;
        }
        while(myStack1.length !== 0 && myStack1[myStack1.length - 1] === ']' || myStack1[myStack1.length - 1] === ')' || myStack1[myStack1.length - 1] === '}') {
            myStack2.push(myStack1.pop());
        }
        
        while(myStack1.length !== 0 && myStack2.length !== 0 && (myStack1[myStack1.length - 1] === '[' || myStack1[myStack1.length - 1] === '(' || myStack1[myStack1.length - 1] === '{')) {
            const right = myStack2.pop();
            const left = myStack1.pop();
            if((right === ')' && left === '(') || (right === '}' && left === '{') || (right === ']' && left === '[')) {
                continue;
            }else {
                return false;
            }
        }
    }
    if(myStack1.length === 0 && myStack2.length !== 0) return false;
    return true;
};

console.log(isValid("(([]){})"));