const r1 = require('readline').createInterface({
    input: process.stdin
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;


let N, M; // N代表有N个公共汽车站, M代表有多少条公路
let grid;
let start = 1;
let end;
let minDist; // 存储从源点到每个节点的最短距离
let visited;

const init = async() => {
    let line = await readline();
    [N, M] = line.split(' ').map(Number);
    grid = new Array(N + 1).fill(Infinity).map(() => new Array(N + 1).fill(Infinity));
    minDist = new Array(N + 1).fill(Infinity);
    minDist[start] = 0; // 起始点到自身的距离为0
    visited = new Array(N + 1).fill(false);
    end = N;

    for(let i = 0; i < M; i++) {
        line = await readline();
        line = line.split(' ').map(Number);
        grid[line[0]][line[1]] = line[2];
    }
}

(async function() {
    await init();

    for(let i = 1; i <= N; i++) {
        let minVal = Infinity;
        let cur = 1;

        // 1、选距离源点最近且未访问过的节点
        for(let v = 1; v <= N; ++v) {
            if(!visited[v] && minDist[v] < minVal) {
                minVal = minDist[v];
                cur = v;
            }
        }

        visited[cur] = true;

        // 3、第三步，更新非访问节点到源点的距离（即更新minDist数组）
        for(let v = 1; v <= N; v++) {
            if(!visited[v] && grid[cur][v] !== Infinity && minDist[cur] + grid[cur][v] < minDist[v]) {
                minDist[v] = minDist[cur] + grid[cur][v];
            }
        }
    }

    if(minDist[end] === Infinity) console.log(-1);
    else console.log(minDist[end]);
})();