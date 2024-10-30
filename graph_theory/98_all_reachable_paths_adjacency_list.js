const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let graph;
let N, M;

let result = [];
let path = [];

async function initGraph() {
    let line;
    line = await readline();
    [N, M] = line.split(' ').map(i => parseInt(i));
    graph = new Array(N + 1).fill(0).map(() => new Array);
    while(line = await readline()) {
        const strArr = line.split(' ').map(i => parseInt(i));
        strArr ? graph[strArr[0]].push(strArr[1]) : null;
    }
}

async function dfs(graph, x, n) {
    if(x === n) {
        result.push([...path]);
        return;
    }

    graph[x].forEach(i => {
        path.push(i);
        dfs(graph, i, n);
        path.pop(i);
    })
}

(
    async function () {
        await initGraph();
        path.push(1);
        dfs(graph, 1, N);
        if(result.length > 0) {
            result.forEach(i => {
                console.log(i.join(' '));
            })
        }else {
            console.log(-1);
        }
    }
)();