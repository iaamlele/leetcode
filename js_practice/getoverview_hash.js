// 优化2:
// 字符串模板+hashtable
function getOverview(carList) {
    const newlist = [];
    const hashtable = {}
    for(let i = 0; i < carList.length; i++) {
        const key = `${carList[i].type}-${carList[i].status}`;
        if(hashtable[key] === undefined) {
            hashtable[key] = newlist.length;
            newlist.push({type: carList[i].type, status: carList[i].status, total: 1});
        }else {
            newlist[hashtable[key]].total++;
        }
    }
    return newlist;
}

let carList = [
    {id: 1, type: '小轿车', status: '在线'},
    {id: 2, type: '小轿车', status: '在线'},
    {id: 6, type: '大货车', status: '在线'},
    {id: 3, type: '小轿车', status: '离线'},
    {id: 4, type: '小轿车', status: '在线'},
    {id: 5, type: '小轿车', status: '在线'},
    {id: 7, type: '大货车', status: '离线'}
]

console.log(getOverview(carList));