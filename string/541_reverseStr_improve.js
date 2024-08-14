/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverse(arr, start, end) {
    while(start < end) {
        const tmp = arr[end];
        arr[end] = arr[start];
        arr[start] = tmp;
        start++;
        end--;
    }
}

var reverseStr = function(s, k) {
    // 字符串转数组: arr = Array.from(s);
    // Math计算: Math.min()
    // Array.prototype.join():将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。
    let len = s.length;
    const arr = Array.from(s);
    for(let i = 0; i < len; i += 2 * k) {
        reverse(arr, i, Math.min(len, i + k) - 1);
    }
    return arr.join("");
};

console.log(reverseStr("abcdefg", 2));