/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverse(arr, start, end) {
    while(start < end) { // 为什么赋值不了?
        let tmp = arr[end];
        arr[end] = arr[start];
        arr[start] = tmp;
        start++;
        end--;
    }
    return arr;
}

var reverseStr = function(s, k) {
    let start = 0;
    let end = start + (2 * k - 1);
    // 字符串是基础数据类型,是不可变类型,不能向数组一样修改
    const arr = [];
    for(let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }
    while(end <= arr.length - 1) {
        reverse(arr, start, start + k - 1);
        start+=2 * k;
        end+=2 * k;
    }
    console.log(start, end);
    if(start < s.length - 1 &&end > s.length - 1 && (s.length - 1 - start) < k) {
        end = s.length - 1;
        reverse(arr, start, end);
        // 将剩余字符全部反转.
    }else if(start < s.length - 1 &&end > s.length - 1 && (s.length - 1 - start) >= k) {
        end = s.length - 1;
        reverse(arr, start, start + k - 1);
        // 反转前 k 个字符，其余字符保持原样。
    }
    let result = "";
    for(let i = 0; i < arr.length; i++) {
        result+=arr[i];
    }
    return result;
};

console.log(reverseStr("abcdefg", 2));