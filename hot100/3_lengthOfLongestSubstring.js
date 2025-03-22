var lengthOfLongestSubstring = function(s) {
    const occ = new Set()
    let rk = -1, res = 0
    let n = s.length
    for(let i = 0; i < n; i++) {
        if(i !== 0) {
            occ.delete(s.charAt(i - 1))
        }
        while(rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            occ.add(s.charAt(rk + 1))
            rk++
        }
        res = Math.max(res, rk - i + 1)
    }
    return res
};
console.log(lengthOfLongestSubstring("abcabcbb"))