let carList = [
    {id: 1, type: '小轿车', status: '在线'},
    {id: 2, type: '小轿车', status: '在线'},
    {id: 6, type: '大货车', status: '在线'},
    {id: 3, type: '小轿车', status: '离线'},
    {id: 4, type: '小轿车', status: '在线'},
    {id: 5, type: '小轿车', status: '在线'},
    {id: 7, type: '大货车', status: '离线'}
]

const getOverview = function(carList) {
    const new_list = [];
    const hashTable = {};
    for(let i = 0; i < carList.length; i++) {
        const key = `${carList[i].type}-${carList[i].status}`;
        if(hashTable[key] === undefined) {
            hashTable[key] = new_list.length;
            new_list.push({type: carList[i].type, status: carList[i].status, total: 1});
        }else {
            new_list[hashTable[key]].total++;
        }
    }
    return new_list;
}

console.log(getOverview(carList));