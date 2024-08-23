/**
 * @param {string} s
 * @return {boolean}
 */
 
var isValid = function(s) {
    const stack = [];
    // string可以用length吗
    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        switch(c) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if(c !== stack.pop()) {
                    return false;
                }
        }
    }
    return stack.length === 0;
}
console.log(isValid("(){{[]}}"));