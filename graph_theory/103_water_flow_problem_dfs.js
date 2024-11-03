const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let graph;
let N, M;
let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const initGraph = async() => {
    let line = await readline();
    [N, M] = line.split(' ').map(i => parseInt(i));
    graph = new Array(N).fill(0).map(() => new Array(M).fill(0));
    
    for(let i = 0; i < N; i++) {
        line = await readline();
        line = line.split(' ').map(i => parseInt(i));
        for(let j = 0; j < M; j++) {
            graph[i][j] = line[j];
        }
    }
}

const dfs = (graph, visited, x, y) => {
    if(visited[x][y]) return;
    visited[x][y] = true;

    for(let i = 0; i < 4; i++) {
        let nextx = x + dir[i][0];
        let nexty = y + dir[i][1];
        if(nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue;
        if(graph[x][y] < graph[nextx][nexty]) continue;
        dfs(graph, visited, nextx, nexty);
    }
}

const isResult = (x, y) => {
    let visited = new Array(N).fill(false).map(() => new Array(M).fill(false));
    dfs(graph, visited, x, y);

    let isFirst = false;
    let isSecond = false;

    // 在visited中判断能否流到第一边界上
    for(let i = 0; i < M; i++) {
        if(visited[0][i]) isFirst = true;
    }

    // 在visited中判断能否流到第一边界左
    for(let i = 0; i < N; i++) {
        if(visited[i][0]) isFirst = true;
    }

    // 在visited中判断能否流到第二边界右
    for(let i = 0; i < N; i++) {
        if(visited[i][M - 1]) isSecond = true;
    }

    // 在visited中判断能否流到第二边界下
    for(let i = 0; i < M; i++) {
        if(visited[N - 1][i]) isSecond = true;
    }

    return isFirst && isSecond;
}

(async function() {
    await initGraph();

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(isResult(i, j)) console.log(i + ' ' + j);
        }
    }
})();