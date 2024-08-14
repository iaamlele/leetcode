function rightHandedString(k, s) {
    const arr = Array.from(s);
    reverseArr(arr, 0, arr.length - 1);
    reverseArr(arr, 0, k - 1);
    reverseArr(arr, k, arr.length - 1);
    return arr.join("");
}

function reverseArr(arr, start, end) {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

console.log(rightHandedString(2, "abcdefg"));