/**
 * @param {string} s
 * @return {string[][]}
 */
// 两个关键问题: 1.切割问题，有不同的切割方式; 2.判断回文
var partition = function(s) {
    const result = [];
    const path = [];
    const len = s.length;

    const backtracking = function(startIndex) {
        // 终止条件: 切割线切到了字符串最后面，说明找到了一种切割方法
        if(startIndex >= s.length) {
            // Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。
            result.push(Array.from(path)); // result.push(path.slice());
            return;
        }

        for(let i = startIndex; i < len; i++) {
            console.log(i, startIndex, path);
            if(!isPalindrome(s, startIndex, i)) continue;
            path.push(s.slice(startIndex, i + 1));
            backtracking(i + 1);
            path.pop();
        }

    }

    const isPalindrome = function(s, startIndex, endIndex) {
        for(let i = startIndex, j = endIndex; i < j; i++, j--) {
            if(s[i] !== s[j]) return false;
        }
        return true;
    }

    backtracking(0);
    return result;
};

console.log(partition("aabb"));