/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    // js中的字符串是不可变类型,要先转换成其他可变数据类型->array
    // 思路: 1.移除多余空格(和27题,移除数组元素一样,快慢指针方法); 2.反转整个字符串; 3.反转每个单词
    // Array.prototype.reverse(): 就地反转数组中的元素，并返回同一数组的引用
    const arr = Array.from(s);
    removeExtraSpaced(arr);
    arr.reverse(0, arr.length - 1);
    let start = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === " " || i === arr.length) {
            reverseWordInArr(arr, start, i - 1);
            start = i + 1;
        }
    }
    return arr.join("");
};

function reverseWordInArr(arr, start, end) {
    while(start < end) {
        let tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }
    return arr;
}

function removeExtraSpaced(arr) {
    let slowpoint = 0;
    let fastpoint = 0;
    while(fastpoint < arr.length) {
        if(arr[fastpoint] === " " && (fastpoint === 0 || arr[fastpoint - 1] === " ")) {
            fastpoint++;
        }else {
            arr[slowpoint++] = arr[fastpoint++];
        }
    }
    
    arr.length = arr[slowpoint - 1] === " " ? slowpoint - 1 : slowpoint;
}

console.log(reverseWords("  hello world  "));