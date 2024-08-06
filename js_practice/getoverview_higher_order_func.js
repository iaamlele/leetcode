// 优化:使用高阶函数让代码更简洁
// list.forEach(item1 => {})
// list.find(item2 => ..)
let carList = [
    {id: 1, type: '小轿车', status: '在线'},
    {id: 2, type: '小轿车', status: '在线'},
    {id: 6, type: '大货车', status: '在线'},
    {id: 3, type: '小轿车', status: '离线'},
    {id: 4, type: '小轿车', status: '在线'},
    {id: 5, type: '小轿车', status: '在线'},
    {id: 7, type: '大货车', status: '离线'}
]

function getOverview(carList) {
    const newlist = [];
    carList.forEach(item1 => {
        const target = newlist.find(item2 => item1.type === item2.type && item1.status === item2.status);
        if(target) {
            target.total++;
        }else {
            newlist.push({type: item1.type, status: item1.status, total: 1});
        }
    });
    return newlist;
}

console.log(getOverview(carList))