// 计算x的n次方,要求时间复杂度为O(logn)

const func = function(x, n) {
    if(n === 0) return 1
    if(n === 1) return x
    const t = func(x, n / 2)
    if(n % 2 === 1) {
        return t * t * x
    }
    return t * t
}

console.log(func(2, 5));