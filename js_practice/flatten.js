// 把数组[[1, 2, 3, [4]], 5]摆平成：[1, 2, 3, 4, 5]
const arr = [[1, 2, 3, [4]], 5];
const newArrary = [];
function flatten(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flatten(arr[i]);
        }else {
            newArrary.push(arr[i]);
        }
    }
}
flatten(arr);
console.log(newArrary);