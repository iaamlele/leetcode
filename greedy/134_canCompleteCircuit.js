/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    for(let i = 0; i < gas.length; i++) {
        let res = gas[i] - cost[i];
        let index = (i + 1) % gas.length;
        while(res > 0 && index !== i) {
            res += gas[index] - cost[index];
            index = (index + 1) % gas.length;
        }
        if(res >= 0 && index === i) return i;
    }
    return -1;    
};
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));