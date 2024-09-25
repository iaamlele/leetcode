/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// 如果单纯的回溯搜索（深搜）并不难，难还难在容器的选择和使用上
// 本题其实是一道深度优先搜索的题目，但是我完全使用回溯法的思路来讲解这道题题目，算是给大家拓展一下思维方式，其实深搜和回溯也是分不开的，毕竟最终都是用递归
var findItinerary = function(tickets) {
    let res = ['JFK'];
    let map = {};

    for(const tickt of tickets) {
        const [from, to] = tickt;
        if(!map[from]) map[from] = [];
        map[from].push(to);
    }

    for(const city in map) {
        map[city].sort();
    }

    const backtracking = function() {
        if(res.length === tickets.length + 1) return true;
        // result[result.length - 1] : 当前所在城市
        // map[result[result.length - 1]]: 当前城市的目的地列表, 判断从当前城市是否有可选的目的地
        if(!map[res[res.length - 1]] || !map[res[res.length - 1]].length) { // 当前没有可用航班
            return false;
        }

        for(let i = 0; i < map[res[res.length - 1]].length; i++) {
            let city = map[res[res.length - 1]][i];
            // Array.prototype.splice(start, deleteCount, item1, item2, ...) 是 JavaScript 数组的一个方法，作用是从数组中删除元素，并且可以在指定位置插入新元素
            // splice(i, 1); 的含义是：从数组 map[result[result.length - 1]] 中的第 i 个位置开始，删除 1 个元素
            // splice(i, 0, city); 的含义：　在ｉ位置插入元素city
            // 删除已走过航线，　防止死循环
            map[res[res.length - 1]].splice(i, 1);
            res.push(city);
            if(backtracking()) return true;
            res.pop();
            map[res[res.length - 1]].splice(i, 0, city);
        }
    }

    backtracking();
    return res;
};

console.log(findItinerary([["MUC","LHR"], ["JFK","MUC"], ["SFO","SJC"], ["LHR","SFO"]]));