// 原地把数组中的0移动到末尾 
// eg：[1, 2, 0, 3, 4, 0, 1, 2]变成[1, 2, 3, 4, 1, 2, 0, 0]
const insituMove = function(arr) {
    // 双指针
    let first_index = 0;
    let last_index = arr.length - 1;
    while(first_index <= last_index) {
        if(arr[first_index] !== 0) {
            first_index++;
        }
        if(arr[last_index] === 0) {
            last_index--;
        }
        if(arr[first_index] === 0 && arr[last_index] !== 0 && first_index <= last_index) {
            const temp = arr[first_index];
            arr[first_index] = arr[last_index];
            arr[last_index] = temp;
        }
    }
    return arr
}

console.log(insituMove([1, 2, 0, 3, 4, 0, 1, 2]));