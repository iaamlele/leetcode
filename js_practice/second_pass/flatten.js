// 把数组[[1, 2, 3, [4]], 5]摆平成：[1, 2, 3, 4, 5]

const flatten = function(arr, new_arr) {
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flatten(arr[i], new_arr);
        }else {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
const new_arr = [];
flatten([[1, 2, 3, [4]], 5], new_arr);
console.log(new_arr);