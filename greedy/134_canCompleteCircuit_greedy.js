/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let curSum = 0;
    let totalSum = 0;
    let start = 0;
    for(let i = 0; i < gas.length; i++) {
        curSum += gas[i] - cost[i];
        totalSum += gas[i] - cost[i];
        if(curSum < 0) {
            curSum = 0;
            start = i + 1;
        }
    }
    if(totalSum > 0) return start;
    else return -1;
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));