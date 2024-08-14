/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    // String.prototype.trim(): 从字符串的两端移除空白字符，并返回一个新的字符串，而不会修改原始字符串。
    // String.prototype.split(): string->array  split()通过搜索模式将字符串分割成一个有序的子串列表，将这些子串放入一个数组，并返回该数组。
    // Array.prototype.reverse(): 就地反转数组中的元素，并返回同一数组的引用
    // Array.prototype.join(): array->string  将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。
    return s.trim().split(/\s+/).reverse().join(" ");
};

console.log(reverseWords("a good   example"));