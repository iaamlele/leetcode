/**
 * @param {string} s
 * @return {string}
 */

function reverse(arr, start, end) {
    let first = start;
    let second = end;
    while(first < second) {
        [arr[first], arr[second]] = [arr[second], arr[first]];
        first++;
        second--;
    }
}

function removeSpace(arr) {
    // 相当与移除空格这个元素,同时保证不重复
    // 问题全都出在这,快慢指针,核心只需要考虑fastpoint
    let slowpoint = 0;
    let fastpoint = 0
    while(fastpoint < arr.length) {
        if(arr[fastpoint] === " " && (fastpoint === 0 || arr[fastpoint - 1] === " ")) {
            fastpoint++;
        }else {
            arr[slowpoint++] = arr[fastpoint++];
        }
    }
    arr.length = arr[slowpoint - 1] === " " ? slowpoint - 1 : slowpoint;
}

var reverseWords = function(str) {
    // 1.移除多余空格
    // 2.翻转所有
    // 3.翻转单词
    str = str.trim();
    const arr = Array.from(str);
    removeSpace(arr);
    console.log(arr);
    reverse(arr, 0, arr.length - 1);

    let start = 0;
    for(let end = 0; end < arr.length; end++) {
        if(arr[end] === " ") {
            reverse(arr, start, end - 1);
            start = end + 1;
        }else if(end === arr.length - 1) {
            reverse(arr, start, end);
        }
        
    }
    return arr.join("");
}

console.log(reverseWords("  Bob    Loves  Alice   "));