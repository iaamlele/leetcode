const r1 = require('readline').createInterface({
    input: process.stdin
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let grid;
let N, M;
let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
let count;
let res = 0;

const init = async() => {
    let line = await readline();
    [N, M] = line.split(' ').map(Number);
    grid = new Array(N).fill(0).map(() => new Array(M).fill(0));

    for(let i = 0; i < N; i++) {
        let line = await readline();
        line = line.split(' ').map(Number);
        for(let j = 0; j < M; j++) {
            grid[i][j] = line[j];
        }
    }
}

const dfs = (grid, x, y) => {
    if(grid[x][y] === 0) return;
    count = 0;

    for(let i = 0; i < 4; i++) {
        let nextx = x + dir[i][0];
        let nexty = y + dir[i][1];
        if(nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue;
        if(grid[nextx][nexty] === 1) count++;
    }
}

(async function() {
    await init();

    for(let i = 0; i < N ; i++) {
        for(let j = 0; j < M; j++) {
            if(grid[i][j] === 1) {
                dfs(grid, i, j);
                res += (4 - count);
                
            }
        }
    }

    console.log(res);
})();