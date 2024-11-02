const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let graph;
let N, M;
let count = 0;
let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const initGraph = async() => {
    let line = await readline();
    [N, M] = line.split(' ').map(i => parseInt(i));
    graph = new Array(N).fill(0).map(() => new Array(M).fill(0));

    for(let i = 0; i < N ; i++) {
        let line = await readline();
        line = line.split(' ').map(i => parseInt(i));
        for(let j = 0; j < M; j++) {
            graph[i][j] = line[j];
        }
    }
}

const dfs = (graph, x, y) => {
    if(graph[x][y] === 0 || graph[x][y] === 2) return;
    graph[x][y] = 2;
    
    for(let i = 0; i < 4; i++) {
        let nextx = x + dir[i][0];
        let nexty = y + dir[i][1];
        if(nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue;
        dfs(graph, nextx, nexty);
    }
}

(async function() {
    await initGraph(); // 这里又忘记了await!!!

    // 上下
    for(let i = 0; i < M; i++) {
        if(graph[0][i] === 1) dfs(graph, 0, i);
        if(graph[N - 1][i] === 1) dfs(graph, N - 1, i);
    }

    // 左右
    for(let i = 0; i < N; i++) {
        if(graph[i][0] === 1) dfs(graph, i, 0);
        if(graph[i][M - 1] === 1) dfs(graph, i, M - 1);
    }

    for(let i = 0; i < N ; i++) {
        for(let j = 0; j < M; j++) {
            if(graph[i][j] === 1) graph[i][j] = 0;
        }
    }
    
    for(let i = 0; i < N ; i++) {
        for(let j = 0; j < M; j++) {
            if(graph[i][j] === 2) graph[i][j] = 1;
        }
    }

    graph.forEach(list => {
        console.log(list.join(' '));
    });
})();