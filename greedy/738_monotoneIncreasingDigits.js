var monotoneIncreasingDigits = function(n) {
    n = n.toString()
    n = n.split('').map(item => {
        return +item // + 使得string to num
    })
    let flag = Infinity
    for(let i = n.length - 1; i > 0; i--) {
        if(n [i - 1] > n[i]) {
            flag = i
            n[i - 1] = n[i - 1] - 1
            n[i] = 9
        }
    }

    for(let i = flag; i < n.length; i++) {
        n[i] = 9
    }

    n = n.join('')
    return +n
};


console.log(monotoneIncreasingDigits(332));