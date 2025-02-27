var maxArea = function(arr) {
    let left = 0, right = arr.length - 1
    let max_area = 0
    while(left < right) {
        const area = (right - left) * Math.min(arr[left], arr[right])
        max_area = Math.max(max_area, area)
        if(arr[left] < arr[right]) {
            left++
        }else {
            right--
        }
    }
    return max_area
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))