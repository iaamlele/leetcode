var longestConsecutive = function(nums) {
    let ans = 0
    const set = new Set(nums)
    for(const x of set) {
        if(set.has(x - 1)) continue

        let y = x + 1
        while(set.has(y)) y++

        ans = Math.max(ans, y - x)
    }
    return ans
};

console.log(longestConsecutive([100,4,200,1,3,2]))