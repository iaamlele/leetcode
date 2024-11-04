const r1 = require('readline').createInterface({
    input: process.stdin
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let grid;
let N, M;
let visited = [];

const init = async() => {
    let line = await readline();
    [N, M] = line.split('').map(Number);
    grid = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(0));
    visited = new Array(N + 1).fill(false);

    let node1, node2;
    for(let i = 0; i < M; i++) {
        let line = await readline();
        [node1, node2] = line.split(' ').map(Number);
        grid[node1][node2] = 1;
    }
}

const dfs = (grid, visited, x, y) => {
    if(visited[x] && visited[y]) return;
    visited[x] = true;
    visited[y] = true;

    for(let i = y; i <= N; i++) {
        for(let j = 1; j <= N; j++) {
            dfs(grid, visited, i, j);
        }
    }
}

(async function() {
    await init();

    dfs(grid, visited, 1, 2);

    for(let i = 1; i <= N; i++) {
        if(!visited[i]) {
            console.log(0);
            return;
        }
    }
    console.log(1);
})();