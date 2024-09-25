/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    for(let i = 0; i < prices.length - 1; i++) {
        let sum = prices[i + 1] - prices[i];
        if(sum > 0) {
            res += sum;
        }
    }

    return res;
};

console.log(maxProfit([7,6,4,3,1]));