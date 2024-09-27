/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];
    let flag = 0;
    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] >= res[flag][0] && intervals[i][0] <= res[flag][1]) {
            res[flag][1] = Math.max(intervals[i][1], res[flag][1]);
        }else {
            res.push(intervals[i]);
            flag++;
        }
    }
    return res;
};

console.log(merge([[1,4],[2,3]]));