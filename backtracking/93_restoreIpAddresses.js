/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    let pointNum;
    let len = s.length;
    let ip_node = 0;

    const backtracking = function(startIndex) {
        if(pointNum === 3) {
            if(isValid(s, startIndex, len - 1)) {
                result.push(s);
            }
            return;
        }

        for(let i = startIndex; i < len; i++) {
            if(isValid(s, startIndex, i)) {

            }
            ip_node = s.slice(startIndex, i);
            if(ip_node[0] === '0' || (ip_node - 0) < 0 || (ip_node - 0) > 255) continue;
            node.push(ip_node);
            backtracking(i + 1);
            node.pop();
        }
    }

    const isValid = function(s, startIndex, endIndex) {
        if(startIndex > endIndex) return false;
        if(s[startIndex] === '0' && startIndex !== endIndex) return false;
        let num = 0;
        s.foreach(item => {
            if(item > '9' || item < '0') return false;
            num = num * 10 + (item - '0');
            if(num > 255) return false;
        })
        return true;
    }

    backtracking(0);
    return result;
};

console.log(restoreIpAddresses("25525511135"));