const r1 = require('readline').createInterface({
    input: process.stdin
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let father = [];
let N;
let result;

const init = async() => {
    for(let i = 1; i <= N; i++) {
        father[i] = i;
    }
}

const find = (u) => {
    if(u === father[u]) return u;
    else return father[u] = find(father[u]);
}

const join = (u, v) => {
    u = find(u);
    v = find(v);
    if(u === v) return;
    father[v] = u;
}

const isSame = (u, v) => {
    if(find(u) === find(v)) return true;
    else return false;
}

(async function() {
    N = parseInt(await readline());
    await init();

    for(let i = 0; i < N; i++) {
        let line = await readline();
        line = line.split(' ').map(Number);
        if(isSame(line[0], line[1])) {
            result = [line[0], line[1]];
        }
        join(line[0], line[1]);
    }

    console.log(result[0] + ' ' + result[1]);
})();