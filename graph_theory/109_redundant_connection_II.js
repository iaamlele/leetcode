const r1 = require('readline').createInterface({ input: process.stdin });
// 创建readline接口
let iter = r1[Symbol.asyncIterator]();
// 创建异步迭代器
const readline = async () => (await iter.next()).value;


let N // 节点数和边数
let father = []  // 并查集
let edges = [] // 边集
let inDegree = [] // 入度


// 并查集初始化
const init = () => {
  for (let i = 1; i <= N; i++)  father[i] = i;
}

// 并查集里寻根的过程
const find = (u) => {
  return u == father[u] ? u : father[u] = find(father[u])
}

// 将v->u 这条边加入并查集
const join = (u, v) => {
  u = find(u)
  v = find(v)
  if (u == v) return // 如果发现根相同，则说明在一个集合，不用两个节点相连直接返回
  father[v] = u
}

// 判断 u 和 v是否找到同一个根
const isSame = (u, v) => {
  u = find(u)
  v = find(v)
  return u == v
}

// 判断删除一条边后是不是树
const isTreeAfterRemoveEdge = (edges, edge) => {
  // 初始化并查集
  init()

  for (let i = 0; i < N; i++) {
    if (i == edge) continue
    if (isSame(edges[i][0], edges[i][1])) { // 构成有向环了，一定不是树
      return false
    }
    join(edges[i][0], edges[i][1])
  }
  return true
}

// 在有向图里找到删除的那条边, 使其成为树
const getRemoveEdge = (edges) => {
  // 初始化并查集
  init()

  for (let i = 0; i < N; i++) {
    if (isSame(edges[i][0], edges[i][1])) { // 构成有向环了，就是要删除的边
      console.log(edges[i][0], edges[i][1]);
      return
    } else {
      join(edges[i][0], edges[i][1])
    }
  }
}


(async function () {
  // 读取第一行输入
  let line = await readline();
  N = Number(line);

  // 读取边信息, 统计入度
  for (let i = 0; i < N; i++) {
    line = await readline()
    line = line.split(' ').map(Number)

    edges.push(line)

    inDegree[line[1]] = (inDegree[line[1]] || 0) + 1
  }

  // 找到入度为2的节点
  let vec = []  // 记录入度为2的边（如果有的话就两条边）
  // 找入度为2的节点所对应的边，注意要倒序，因为优先删除最后出现的一条边
  for (let i = N - 1; i >= 0; i--) {
    if (inDegree[edges[i][1]] == 2) {
      vec.push(i)
    }
  }

  // 情况一、情况二
  if (vec.length > 0) {
     // 放在vec里的边已经按照倒叙放的，所以这里就优先删vec[0]这条边
    if (isTreeAfterRemoveEdge(edges, vec[0])) {
      console.log(edges[vec[0]][0], edges[vec[0]][1]);
    } else {
      console.log(edges[vec[1]][0], edges[vec[1]][1]);
    }
    return 0
  }

  // 情况三
  // 明确没有入度为2的情况，那么一定有有向环，找到构成环的边返回就可以了
  getRemoveEdge(edges)
})()
