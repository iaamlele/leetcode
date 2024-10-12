/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const sk = Array(temperatures.length).fill(0);
    for(let i = temperatures.length - 2; i >= 0; i--) {
        let num = 0;
        for(let j = i + 1; j < temperatures.length; j++) {
            num++;
            if(temperatures[j] > temperatures[i]) {
                sk[i] = num;
                break;
            }
        }
    }
    return sk;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));