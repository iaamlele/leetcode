/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const result = [];
    const path = [];
    const map = [
        "", // 0
        "", // 1
        "abc", // 2
        "def", // 3
        "ghi", // 4
        "jkl", // 5
        "mno", // 6
        "pqrs", // 7
        "tuv", // 8
        "wxyz", // 9
    ]

    // 这里的index是记录遍历digits的, 代表树的深度
    const backtracking = function(n, a) {
        if(path.length === n.length) {
            result.push(path.join(""));
            return;
        }
        for(const v of map[n[a]]) {
            path.push(v);
            backtracking(n, a + 1);
            path.pop();
        }
    }

    if(digits.length === 0) return result;
    if(digits.length === 1) return map[digits].split("");
    backtracking(digits, 0);
    return result;
};

console.log(letterCombinations("23"));