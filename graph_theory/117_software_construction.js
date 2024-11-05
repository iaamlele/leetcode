const r1 = require('readline').createInterface({
    input: process.stdin
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let N, M; // 表示 N 个文件之间拥有 M 条依赖关系
let inDegree = [];
let umap = new Map();
let result = [];

const init = async() => {
    let line = await readline();
    [N, M] = line.split(' ').map(Number);
    inDegree = new Array(N).fill(0);

    //  S 和 T，表示 T 文件依赖于 S 文件
    // 读取边集
    while(M--) {
        line = await readline();
        let [x, y] = line.split(' ').map(Number);

        inDegree[y]++;

        if(!umap.has(x)) {
            umap.set(x, [y]);
        }else {
            umap.get(x).push(y);
        }
    }
}

(async function() {
    await init();

    let que = [];
    for(let i = 0; i < N; i++) {
        if(inDegree[i] === 0) {
            que.push(i);
        }
    }

    while(que.length) {
        let cur = que.shift(); //当前文件
        result.push(cur);

        let files = umap.get(cur); // 当前文件指向的文件

        if(files && files.length) {
            for(let i = 0; i < files.length; i++) {
                inDegree[files[i]]--;
                if(inDegree[files[i]] === 0) que.push(files[i]);
            }
        }
    }

    // 这里result.length == N 一定要判断, 因为可能存在环
    if(result.length === N) return console.log(result.join(' '));
    console.log(-1);
})();