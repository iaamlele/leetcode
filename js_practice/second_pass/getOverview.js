let carList = [
    {id: 1, type: '小轿车', status: '在线'},
    {id: 2, type: '小轿车', status: '在线'},
    {id: 6, type: '大货车', status: '在线'},
    {id: 3, type: '小轿车', status: '离线'},
    {id: 4, type: '小轿车', status: '在线'},
    {id: 5, type: '小轿车', status: '在线'},
    {id: 7, type: '大货车', status: '离线'}
]

const findNode = function(car_info, new_list) {
    if(!new_list.length) return false;
    for(let i = 0; i < new_list.length; i++) {
        if(new_list[i].type === car_info.type && new_list[i].status === car_info.status) return new_list[i];
    }
    return false;
}

const getOverview = function(carList, new_list) {
    for(let i = 0; i < carList.length; i++) {
        const find_node = findNode(carList[i], new_list);
        if(!find_node) {
            new_list.push({type: carList[i].type, status: carList[i].status, total: 1});
        }else {
            find_node.total++;
        }
    }
    console.log(new_list);
}

getOverview(carList, new_list = []);