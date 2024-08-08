/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 展开语法
// Array.prototype.sort: 就地按照UTF-16 码元值升序排序
// Array.prototype.join(): join() 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。
var isAnagram = function(s, t) {
    return s.length === t.length && [...s].sort().join("") === [...t].sort().join("");
};

const s = "ills";
const t = "sill";
console.log(isAnagram(s, t));