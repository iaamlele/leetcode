function repaleceNumber(s) {
    const arr = Array.from(s);
    for(let i = 0; i < arr.length; i++) {
        const asc = arr[i].charCodeAt(0);
        if(asc <= 57 && asc >= 48) {
            arr[i] = "number";
        }
    }
    return arr.join("");
}

console.log(repaleceNumber("a1b2c3"));