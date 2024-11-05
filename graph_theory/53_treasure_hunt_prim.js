const r1 = require('readline').createInterface({
    input: process.stdin
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let v, e; // V代表顶点数，E代表边数
let x, y, k; // x, y分别代表边的起点和终点, k代表边的权值
let grid;
let minDist;
let isInTree;

const init = async() => {
    let line = await readline();
    [v, e] = line.split(' ').map(Number);
    grid = new Array(v + 1).fill(10001).map(() => new Array(v + 1).fill(10001)); 
    minDist = new Array(v + 1).fill(10001);
    isInTree = new Array(v + 1).fill(false);

    while(e--) {
        let line = await readline();
        [x, y, k] = line.split(' ').map(Number);
        grid[x][y] = k; // 无向图->视为双向图处理
        grid[y][x] = k;
    }  
}

(async function() {
    await init();

    // 只需要循环 n-1次，建立 n - 1条边，就可以把n个节点的图连在一起
    for(let i = 1; i < v; i++) {

        // 1、第一步：选距离生成树最近节点
        // 选中哪个节点 加入最小生成树
        let cur = -1;
        let minVal = Infinity;
        for(let j = 1; j <= v; j++) {
            // 选取最小生成树的条件: 1.不在最小生成树里面; 2.距离最小生成树最近的节点
            if(!isInTree[j] && minDist[j] < minVal) {
                minVal = minDist[j];
                cur = j;
            }
        }

        // 第二步：最近节点（cur）加入生成树
        isInTree[cur] = true;

        // 第三步：更新非生成树节点到生成树的距离（即更新minDist数组）
        // cur节点加入之后， 最小生成树加入了新的节点，那么所有节点到 最小生成树的距离（即minDist数组）需要更新一下
        // 由于cur节点是新加入到最小生成树，那么只需要关心与 cur 相连的 非生成树节点 的距离 是否比 原来 非生成树节点到生成树节点的距离更小了呢
        for(let j = 1; j <= v; j++) {
            // 更新的条件: 1.节点是非生成树里的节点; 2.与cur相连的某节点的权值 比 该某节点距离最小生成树的距离小
            if(!isInTree[j] && grid[cur][j] < minDist[j]) {
                minDist[j] = grid[cur][j];
            }
        }

    }

    let result = 0;
    for(let i = 2; i <= v; i++) { // 不计第一个顶点，因为统计的是边的权值，v个节点有 v-1条边
        result += minDist[i];
    }
    console.log(result);
})();