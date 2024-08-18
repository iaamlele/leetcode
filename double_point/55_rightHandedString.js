const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputs = [];
r1.on("line", (data) => {
    inputs.push(data);
    //close 事件通常在标准输入被关闭时触发，而不是在每行输入后触发。所以进行手动调用
    if(inputs.length === 2) {
        r1.close();
    }
}).on("close", () => {
    const res = rightHandedString(inputs);
    console.log(res);
})

function reverse(arr, start, end) {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

function rightHandedString(inputs) {
    let [k, str] = inputs;
    console.log(typeof(k));
    k = parseInt(k);
    const arr = Array.from(str);
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr.join("");
}

