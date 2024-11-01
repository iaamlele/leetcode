const { read } = require('fs');

const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let graph;
let N, M;
let visited;
let result = 0;
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const initGraph = async () => {
    let line = await readline();
    [N, M] = line.split(' ').map(i => parseInt(i));
    graph = new Array(N).fill(0).map(() => new Array(M).fill(0));
    visited = new Array(N).fill(false).map(() => new Array(M).fill(false));
    
    for(let i = 0; i < N; i++) {
        line = await readline();
        line = line.split(' ').map(i => parseInt(i));
        for(let j = 0; j < M; j++) {
            graph[i][j] = line[j];
        }
    }
}

const bfs = (graph, visited, x, y) => { // 为什么这里必须是匿名函数
    let queue = [];
    queue.push([x, y]);
    visited[x][y] = true;

    while(queue.length) {
        let [x, y] = queue.shift();
        for(let i = 0; i < 4; i++) {
            let nextx = x + dir[i][0];
            let nexty = y + dir[i][1];
            if(nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue;
            if(!visited[nextx][nexty] && graph[nextx][nexty] === 1) {
                queue.push([nextx, nexty]);
                visited[nextx][nexty] = true;
            }
        }
    }
}

(async function() {
    await initGraph();
    
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(!visited[i][j] && graph[i][j] === 1) {
                result++;
                bfs(graph, visited, i, j); // 这里面的this是obj
            }
        }
    }

    console.log(result);
})();