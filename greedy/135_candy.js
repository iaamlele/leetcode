/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const candyVec = new Array(ratings.length).fill(1);

    // 右大于左 -> 从前往后
    for(let i = 1; i < ratings.length; i++) {
        if(ratings[i] > ratings[i - 1]) candyVec[i] = candyVec[i - 1] + 1; 
        else candyVec[i] = 1; 
    }
    // 左大于右 -> 从后往前
    for(let i = ratings.length - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
            candyVec[i] = Math.max(candyVec[i], candyVec[i + 1] + 1);
        } 
    }
    return candyVec.reduce((a, b) => a + b);
};

console.log(candy([10,10,10,10,10,10]));