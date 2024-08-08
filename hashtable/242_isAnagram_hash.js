// 竟然超时??
// hash
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 数组模拟hash
// String.prototype.codePointAt(start, end):返回给定索引字符的 Unicode 码位值, [)左闭右开区间
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    const arr = new Array(26).fill(0);
    
    for(let i = 0; i < s.length; i++) {
        arr[s.codePointAt(i, i + 1) % 26] += 1;
    }

    for(let i = 0; i < t.length; i++) {
        arr[t.codePointAt(i, i + 1) % 26] --;
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            return false;
        }
    }
    return true;
};

const s = "ills";
const t = "sill";
console.log(isAnagram(s, t));