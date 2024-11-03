const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let graph;
let visited;
let N, M;
let count;
let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const initGraph = async() => {
    let line = await readline();
    [N, M] = line.split(' ').map(i => parseInt(i));
    graph = new Array(N).fill(0).map(() => new Array(M).fill(0));
    visited = new Array(N).fill(0).map(() => new Array(M).fill(0));

    for(let i = 0; i < N; i++) {
        let line = await readline();
        line = line.split(' ').map(i => parseInt(i));
        for(let j = 0; j < M; j++) {
            graph[i][j] = line[j];
        }
    }
}

const dfs = (graph, visited, x, y, mark) => {
    if(visited[x][y] !== 0) return;
    visited[x][y] = mark;
    count++;

    for(let i = 0; i < 4; i++) {
        let nextx = x + dir[i][0];
        let nexty = y + dir[i][1];
        if(nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue;
        if(visited[nextx][nexty] !== 0 || graph[nextx][nexty] === 0) continue;
        dfs(graph, visited, nextx, nexty, mark);
    }
}

(async function() {
    await initGraph();

    // 全是陆地的简单处理方式,这里没想到!
    let isAllisland = true;
    let mark = 2;

    // map要new!!
    const areaMap = new Map();
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(graph[i][j] === 0 && isAllisland) isAllisland = false;
            if(graph[i][j] === 1 && visited[i][j] === 0) {
                count = 0;
                dfs(graph, visited, i, j, mark);
                areaMap.set(mark, count);
                mark++;
            }
        }
    }

    if(isAllisland) {
        console.log(N * M);
        return;
    }

    let area = 1;
    let result = 0;

    //标记访问过的岛屿, 因为海洋四周可能是同一个岛屿, 需要标记避免重复统计面积
    let visitedIsland = new Map();
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(visited[i][j] === 0) {
                area = 1;
                visitedIsland.clear();

                for(let k = 0; k < 4; k++) {
                    let nextx = i + dir[k][0];
                    let nexty = j + dir[k][1];
                    if(nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue;
                    
                    const island = visited[nextx][nexty];
                    if(island === 0 || visitedIsland.get(island)) continue; // 四周都是海洋或者访问过的陆地 
                    visitedIsland.set(island, true);
                    area += (areaMap.get(visited[nextx][nexty]));
                }
            }
            result = Math.max(result, area);
        }
    }
    console.log(result);
})();