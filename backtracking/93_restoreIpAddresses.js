var restoreIpAddresses = function(s) {
    const result = [];

    const backtracking = function(s, startIndex, pointNum) {
        if(pointNum === 3) {
            // 判断最后一个片段是否合法
            if(isValid(s, startIndex, s.length - 1)) {
                result.push(s);
            }
            return; 
        }
        
        for(let i = startIndex; i < s.length; i++) {
            // 判断当前片段是否合法
            if(isValid(s, startIndex, i)) {
                // 插入逗点
                s = s.slice(0, i + 1) + '.' + s.slice(i + 1);
                pointNum++;
                // 递归调用，处理下一个片段，插入后下一个起点为 i + 2（跳过刚插入的逗点）
                backtracking(s, i + 2, pointNum);
                pointNum--;
                // 回溯时删除插入的逗点
                s = s.slice(0, i + 1) + s.slice(i + 2);
            } else break;
        }
    }

    const isValid = function(s, startIndex, endIndex) {
        if(startIndex > endIndex) return false;
        if(s[startIndex] === '0' && startIndex !== endIndex) return false; // 0开头不合法
        let num = 0;
        for (let i = startIndex; i <= endIndex; i++) {
            if (s[i] > '9' || s[i] < '0') return false; // 非数字字符不合法
            num = num * 10 + (s[i] - '0');
            if (num > 255) return false; // 超过255不合法
        }
        return true;
    }

    if(s.length < 4 || s.length > 12) return result; // 剪枝条件
    backtracking(s, 0, 0);
    return result;
};

console.log(restoreIpAddresses("25525511135"));
