/**
 * @param {string} s
 * @return {string}
 */
// Array.prototype.at(): 接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
// 无心插柳柳成阴了属于是
var removeDuplicates = function(s) {
    const arr1 = Array.from(s);
    const arr2 = [];
    while(arr1.length !== 0) {
        if(arr2.length === 0) {
            var item1 = arr1.pop();
            arr2.push(item1);
        }else {
            var item2 = arr1.pop();
            if(item1 === item2) {
                arr2.pop();
                item1 = arr2.at(-1);
                continue;
            }
            arr2.push(item2);
            item1 = item2;
        }
    }
    while(arr2.length !== 0) {
        arr1.push(arr2.pop());
    }
    return arr1.join("");
};

console.log(removeDuplicates("azxxzy"));