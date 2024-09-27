/**
 * @param {number[][]} points
 * @return {number}
 */
// 如何模拟气球射爆的过程呢？是在数组中移除元素还是做标记呢? 
// 思路: 如果把气球排序之后，从前到后遍历气球，被射过的气球仅仅跳过就行了，没有必要让气球数组remove气球，只要记录一下箭的数量就可以了
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[0] - b[0]);
    let res = 1;
    let interval = points[0];
    console.log(points);
    for(let i = 0; i < points.length - 1; i++) {
        if((points[i + 1][0] >= interval[0] && points[i + 1][0] <= interval[1]) 
            || (points[i + 1][1] >= interval[0] && points[i + 1][1] <= interval[1])) {
                interval[0] = Math.max(interval[0], points[i + 1][0]);
                interval[1] = Math.min(interval[1], points[i + 1][1]);
                continue;
        }else {
            res++;
            interval = points[i + 1];
        }
        
    }
    return res;
};

console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]));