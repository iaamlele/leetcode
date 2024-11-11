const r1 = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let graph;
let N, M;
let visited;
let result = 0;
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

// 读取输入，初始化地图
const initGraph = async () => {
  let line = await readline();
  [N, M] = line.split(' ').map(Number);
  graph = new Array(N).fill(0).map(() => new Array(M).fill(0))
  visited = new Array(N).fill(false).map(() => new Array(M).fill(false))

  for (let i = 0; i < N; i++) {
    line = await readline()
    line = line.split(' ').map(Number)
    for (let j = 0; j < M; j++) {
      graph[i][j] = line[j]
    }
  }
}

const dfs = (graph, visited, x, y) => {
    for (let i = 0; i < 4; i++) {
      const nextx = x + dir[i][0]
      const nexty = y + dir[i][1]
      if (nextx < 0 || nextx >= N || nexty < 0 || nexty >= M) continue
      if (!visited[nextx][nexty] && graph[nextx][nexty] === 1) {
        visited[nextx][nexty] = true
        dfs(graph, visited, nextx, nexty)
      }
    }
}

(async function () {

  // 读取输入，初始化地图
  await initGraph()

  // 统计岛屿数
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        // 标记已访问
        visited[i][j] = true

        // 遇到没访问过的陆地，+1
        result++

        // 深度优先遍历，将相邻陆地标记为已访问
        dfs(graph, visited, i, j)
      }
    }
  }
  console.log(result);
})()