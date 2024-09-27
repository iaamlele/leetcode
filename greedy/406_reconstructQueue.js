/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// Array.prototype.splice(): splice() 方法就地移除或者替换已存在的元素和/或添加新的元素
// let arr = [0, 1, 2, 3, 4, 5];
// arr.splice(1, 0, "A"); // [0, 'A', 1, 2, 3, 4, 5]
// arr.splice(1, 1, "A"); // [ 0, 'A', 2, 3, 4, 5 ]
// arr.splice(1, 2, "A"); // [ 0, 'A', 3, 4, 5 ]
var reconstructQueue = function(people) {
    let queue = [];
    people.sort((a, b) => {
        if(b[0] !== a[0]) {
            return (b[0] - a[0]);
        }else {
            return (a[1] - b[1]);
        }
    })
    for(let i = 0; i < people.length; i++) {
        queue.splice(people[i][1], 0, people[i]);
    }
    return queue;
};

console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));