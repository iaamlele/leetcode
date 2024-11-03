const { read } = require('fs');

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
        let line = await readline();
        line = line.split(' ').map(i => parseInt(i));
        for(let j = 0; j < M; j++) {
            graph[i][j] = line[j];
        }
    }
}

const bfs = (graph, visited, x, y) => {
    if(visited[x][y]) return;
    const que = [];
    que.push([x, y]);
    visited[x][y] = true;

    while(que.length) {
        const [xx, yy] = que.shift();
        for(let i = 0; i < 4; i++) {
            let nextx = xx + dir[i][0];
            let nexty = yy + dir[i][1];
            if(nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue;
            if(visited[nextx][nexty] || graph[xx][yy] > graph[nextx][nexty]) continue;
            que.push([nextx, nexty]);
            visited[nextx][nexty] = true;
        }
    }
}

(async function() {
    await initGraph();

    let firstBorder = new Array(N).fill(false).map(() => new Array(M).fill(false));
    let secondBorder = new Array(N).fill(false).map(() => new Array(M).fill(false));

    // 第一边界上 && 第二边界下
    for(let i = 0; i < M; i++) {
        bfs(graph, firstBorder, 0, i);
        bfs(graph, secondBorder, N - 1, i);
    }

    // 第一边界左 && 第二边界右
    for(let i = 0; i < N; i++) {
        bfs(graph, firstBorder, i, 0);
        bfs(graph, secondBorder, i, M - 1);
    }

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(firstBorder[i][j] && secondBorder[i][j]) console.log(i + ' ' + j);
        }
    }
})();