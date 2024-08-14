const repaleceNumber = function(s) {
    // String.prototype.charCodeAt(): string.charCodeAt(index):根据索引返回string对应的UTF-16 码元
    const arr = Array.from(s);
    for(let i = 0; i < arr.length; i++) {
        let asc = arr[i].charCodeAt(0);
        if(asc <= 57 && asc >= 48) {
            arr[i] = "number";
        }
    }
    return arr.join("");
}

console.log(repaleceNumber("a1b2c3"));