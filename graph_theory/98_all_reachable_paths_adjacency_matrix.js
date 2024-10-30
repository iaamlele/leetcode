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
    graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(0));

    while(M--) {
        line = await readline();
        const strArr = line ? line.split(' ').map(i => parseInt(i)) : undefined; // 这里使用三元运算意义何在
        strArr ? graph[strArr[0]][strArr[1]] = 1 : null;
    }
}

function dfs(graph, x, n) {
    // x: 遍历节点，n：到达节点
    if(x === n) {
        result.push([...path]);
    }
    for(let i = 1; i <= n; i++) {
        if(graph[x][i] === 1) {
            path.push(i);
            dfs(graph, i, n);
            path.pop(i);
        }
    }
}

(async function() {
    await initGraph();
    path.push(1);
    
    dfs(graph, 1, N);

    if(result.length > 0) {
        result.forEach(i => {
            console.log(i.join(' '));
        });
    }else {
        console.log(-1);
    }
    // for(let i = 0; i <= N; i++) {
    //     for(let j = 0; j <= N; j++) {
    //         console.log("i:", i, "j", j, "graph[i][j]: ", graph[i][j]);
    //     }
    // }
})();