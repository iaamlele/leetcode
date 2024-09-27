/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let res = [];
    let firstIndex = 0;
    let lastIndex = 0;

    const findLastIndex = function(s, c) {
        for(let i = s.length - 1; i >= 0; i--) {
            if(c === s[i]) return i;
        }
    }

    while(firstIndex < s.length) {
        lastIndex = findLastIndex(s, s[firstIndex]);

        for(let i = firstIndex; i <= lastIndex; i++) {
            lastIndex = findLastIndex(s, s[i]) > lastIndex ? findLastIndex(s, s[i]): lastIndex;
        }

        res.push(lastIndex - firstIndex + 1);
        firstIndex = lastIndex + 1;
    }

    return res;
};

console.log(partitionLabels("eccbbbbdec"));