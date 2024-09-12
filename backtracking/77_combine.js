/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    const path = [];

    const backtracking = function(n, k, startIndex) {
        if(path.length === k) {
            // result.push(path.slice());和这样写的区别:result.push(path); 
            // result.push(path.slice()): path.slice() 创建了一个 path 数组的浅拷贝。这样在将 path 当前的状态添加到 result 时，不会受到后续对 path 的修改影响。每次推入的是一个新数组，独立于后续的修改。
            // result.push(path): 直接将 path 数组的引用推入到 result 中。当 path 发生变化时，result 中保存的也是同一个引用，所以 result 中已经保存的内容会随着 path 的修改而改变。
            result.push(path.slice());
            return;
        }
        // 剪枝: path.length -> 已取个数; k -> 要取个数; k - path.length -> 还需要的元素个数; n - (k - path.length) + 1 -> 在集合中至多从这个位置开始取
        for(let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            backtracking(n, k, i + 1);
            path.pop();
        }
    }

    backtracking(n, k, 1);
    return result;
};

console.log(combine(4, 2));