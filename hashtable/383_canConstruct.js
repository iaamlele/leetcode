/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// 遍历list使用list.forEach    遍历string使用for(let item of string)
var canConstruct = function(ransomNote, magazine) {
    const hash = {};
    for(let item of magazine) {
        if(hash[item] === undefined) {
            hash[item] = 1;
        }else {
            hash[item] +=1;
        }
    }
    for(let item of ransomNote) {
        if(hash[item] && hash[item] >= 0) {
            hash[item]--;
        }else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct("aa", "ab"));