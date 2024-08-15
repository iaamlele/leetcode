/**
 * @param {number} n
 * @return {boolean}
 */
// 1.字符转数字: parseInt(str);
// 2.数字转字符: number.tostring();
var isHappy = function(n) {
    let i = 7;
    let str = n.toString();
    while(i--) {
        str = str.split("");
        let sum = 0;
        for(let i = 0; i < str.length; i++) {
            sum+=parseInt(str[i] * str[i]);
        }
        
        str = sum.toString();
        if(sum === 1) {
            return true
        }
    }
    return false;
    
};

console.log(isHappy(2));