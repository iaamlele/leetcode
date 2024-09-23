/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(); // 胃口
    s.sort(); // 饼干
    let res = 0;
    let s_index = s.length - 1;
    for(let i = g.length - 1; i >= 0; i--) {// 遍历胃口
        if(s_index >= 0 && s[s_index] >= g[i]) {
            res++;
            s_index--;
        }
    }
    
    return res;
};

console.log(findContentChildren([1, 3, 2], [1, 1]));