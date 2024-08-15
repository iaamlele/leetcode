/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const arr1 = Array.from(haystack);
    const arr2 = Array.from(needle);
    let flag = 0;
    let result = -1;
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                // console.log(i, j);
                break;
            }else if(arr1[i] === arr2[j] && j === arr2.length - 1) {
                flag = 1;                
            }
        }
        if(flag) {
            result = i - arr2.length + 1;
            break;
        }
    }
    return result;
};

console.log(strStr("sadbutsad", "sad"));