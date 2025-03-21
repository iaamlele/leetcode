// 时间复杂度：　n * mlogm
// sort的复杂度：mlogm
// s.charAt(), s.charCodeAt(). s.codePointAt()

// 思路：滑动窗口＋分别维护两个字母表，比对字母表，避免使用sort
// 技巧：
// 1.创建并批量填充数组：new Array(26).fill(0);
// 2.获取某个字符的26字母位置：const getIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);
// 3.判断两个数组是否相同：toString()后比较，window.toString() === window_p.toString()
// n*m + m
const findAnagrams = function(s, p) {
    let sLen = s.length;
    let len_p = p.length;
    if(sLen < len_p) return [];
    const res = [];
    const getIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

    const window = new Array(26).fill(0);
    const window_p = new Array(26).fill(0);

    for(let i = 0; i < len_p; i++) {
        window_p[getIndex(p[i])]++;
    }

    for(let i = 0; i <= sLen - len_p; i++) {
        window.fill(0);
        for(let j = 0; j < len_p; j++) {
            window[getIndex(s[i + j])]++;
        }

        if(window.toString() === window_p.toString()) {
            res.push(i);
        }
    }
    
    return res;
}

console.log(findAnagrams("baa", "aa"));