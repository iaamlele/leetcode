const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let graph;
let N, M;
let result = 0;
let count = 0;
let visited;
let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const initGraph = async() => {
    let line = await readline();
    [N, M] = line.split(' ').map(i => parseInt(i));
    console.log(N, M);
    graph = new Array(N).fill(0).map(() => new Array(M).fill(0));
    visited = new Array(N).fill(false).map(() => new Array(M).fill(false));

    for(let i = 0; i < N ; i++) {
        let line = await readline();
        line = line.split(' ').map(i => parseInt(i));
        for(let j = 0; j < M ; j++) {
            graph[i][j] = line[j];
        }
    }
}

const bfs = (graph, visited, x, y) => {
    const que = [];
    que.push([x, y]);
    visited[x][y] = true;
    count++;

    while(que.length) {
        let [x, y] = que.shift();
        for(let i = 0; i < 4; i++) {
            let curx = x + dir[i][0];
            let cury = y + dir[i][1];
            if(curx < 0 || curx >= N || cury < 0 || cury >= M) continue;
            if(!visited[curx][cury] && graph[curx][cury] === 1) {
                count++;
                que.push([curx, cury]);
                visited[curx][cury] = true;
            }        
        }
    }
}

(async function () {
    // initGraph 函数被定义为一个异步函数（async），这意味着它会返回一个 Promise。当你调用 initGraph() 时，你需要使用 await 来等待这个 Promise 完成, 从而避免在图还未完全构建完成时输出空的或未初始化的内容
    await initGraph(); 

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(!visited[i][j] && graph[i][j] === 1) { // 注意,这个地方是1, 不是0 !!
                count = 0;
                bfs(graph, visited, i, j);
                result = Math.max(result, count);
            }
        }
    }
    console.log(result);
})();