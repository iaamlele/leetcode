const r1 = require('readline').createInterface({
    input: process.stdin
});
let iter = r1[Symbol.asyncIterator]();
const readline = async() => (await iter.next()).value;

let n = 10001;
let father;
let v, e;
let edges;
let result_val = 0;

const init = async() => {
    let line = await readline();
    [v, e] = line.split(' ').map(Number); // v: 节点数量  e: 边数量 
    father = new Array(n).fill(-1);
    edges = new Array(e);

    while(e--) {
        line = await readline();
        line = line.split(' ').map(Number);
        edges.push([line[0], line[1], line[2]]);
    }
}

const init_bcj = () => {
    for(let i = 0; i < n; i++) father[i] = i;
}

const find = (u) => {
    if(u === father[u]) return u;
    else return father[u] = find(father[u]);
}

const join = (u, v) => {
    u = find(u);
    v = find(v);
    if(u === v) return;
    father[v] = u;
}

(async function() {
    await init();
    
    // 按边的权值对边进行从小到大排序
    edges.sort((a,b) => {
        if(!a || !b) return 0;
        return a[2] - b[2];
    })

    // 并查集初始化
    init_bcj();  
    
    // 从头开始遍历边
    edges.forEach(edge => {
        let x = find(edge[0]);
        let y = find(edge[1]);

        // 如果祖先不同，则不在同一个集合
        if(x !== y) {
            result_val += edge[2]; // 这条边可以作为生成树的边
            join(x, y); // 两个节点加入到同一个集合  这个地方为什么不是join(edge[0], edge[1])吗??
        }
    });

    console.log(result_val);
})();