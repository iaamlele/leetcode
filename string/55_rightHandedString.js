function rightHandedString(k, s) {
    const arr = Array.from(s);
    for(let i = 1; i <= k; i++) {
        arr.unshift(arr[arr.length - i]);
    }
    arr.length = arr.length - k;
    return arr.join("");
}

console.log(rightHandedString(2, "abcdefg"));