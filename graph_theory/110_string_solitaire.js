const { read } = require('fs');

const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let start, end;
let arr = new Set();
let visited = new Map();

const init = async() => {
    let line = await readline();
    let strNum = line.split('').map(Number);
    
    line = await readline();
    [start, end] = line.split(' ');
    
    for(let i = 0; i < strNum; i++) {
        let line = await readline();
        // Set常用方法: add, has, values
        // Map常用方法: set, get, has, values
        arr.add(line);
    }
}

(async function() {
    await init();

    let que = [];
    que.push(start);
    visited.set(start, 1);

    while(que.length) {
        let word = que.shift();
        let path = visited.get(word);

        for(let i = 0; i < word.length; i++) {
            let newword = word.split('');
            for(let j = 0; j < 26; j++) {
                // String.fromCharCode(): 返回由指定的 UTF-16 码元序列创建的字符串, 语法: String.fromCharCode(num1, num2, /* …, */ numN), numN: 一个介于 0 和 65535（0xFFFF）之间的数字，表示一个 UTF-16 码元, 返回值: 一个长度为 N 的字符串，由 N 个指定的 UTF-16 码元组成
                // String.prototype.charCodeAt(): 返回一个整数，表示给定索引处的 UTF-16 码元，其值介于 0 和 65535 之间
                newword[i] = String.fromCharCode('a'.charCodeAt() + j);
                if(newword.join('') === end) {
                    // console.log(newword.join(''));
                    console.log(path + 1);
                    return 0
                }

                if(arr.has(newword.join('')) && !visited.has(newword.join(''))) {
                    que.push(newword.join(''));
                    visited.set(newword.join(''), path + 1);
                }
            }
        }
    }

    console.log(0);
})();