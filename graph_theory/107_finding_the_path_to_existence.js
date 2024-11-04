const r1 = require('readline').createInterface({
    input: process.stdin
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let N, M; // N 代表节点的个数，M 代表边的个数
let source, destination;
let father = [];

const init = () => {
    for(let i = 1; i <= N; i++) father[i] = i;
}

// 寻根
const find = (u) => {
    if(u === father[u]) return u;
    else return father[u] = find(father[u]);
}

// 将v -> u这条边加入并查集
const join = (u, v) => {
    u = find(u);
    v = find(v);
    if(u === v) return;
    father[v] = u;
}

const isSame = (u, v) => {
    u = find(u);
    v = find(v);
    return u === v;
}

(async function() {
    let line = await readline();
    [N, M] = line.split(' ').map(Number);

    father = new Array(N);
    init();

    // 读取边信息,加入并查集
    for(let i = 1; i <= M; i++) {
        line = await readline();
        line = line.split(' ').map(Number);
        join(line[0], line[1]);
    }

    line = await readline();
    [source, destination] = line.split(' ').map(Number);

    if(isSame(source, destination)) return console.log(1);
    console.log(0);
})();