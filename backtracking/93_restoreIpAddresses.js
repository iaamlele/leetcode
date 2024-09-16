/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];

    const backtracking = function(s, startIndex, pointNum) {
        if(pointNum === 3) {
            if(isValid(s, startIndex, s.length - 1)) {
                console.log(s);
                result.push(s);
            }
            return; 
        }
        
        for(let i = startIndex; i < s.length; i++) {
            if(isValid(s, startIndex, i)) {
                s = s.slice(0, i) + '.' + s.slice(i);
                pointNum++;
                backtracking(s, i + 2, pointNum);
                pointNum--;
                s = s.slice(0, i) + s.slice(i + 1);
            }else break;
        }
    }

    const isValid = function(s, startIndex, endIndex) {
        if(startIndex > endIndex) return false;
        if(s[startIndex] === '0' && startIndex !== endIndex) return false;
        let num = 0;
        for (let i = startIndex; i <= endIndex; i++) {
            if (s[i] > '9' || s[i] < '0') { // 遇到非数字字符不合法
                return false;
            }
            num = num * 10 + (s[i] - '0');
            console.log(num);
            if (num > 255) { // 如果大于255了不合法
                return false;
            }
        }
        return true;
    }

    if(s.length < 4 || s.length > 12) return result;
    backtracking(s, 0, 0);
    return result;
};

console.log(restoreIpAddresses("25525511135"));