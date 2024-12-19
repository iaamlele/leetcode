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
    return new_list.find(elem => elem.type === car_info.type && elem.status === car_info.status)
    // for(let i = 0; i < new_list.length; i++) {
    //     if(new_list[i].type === car_info.type && new_list[i].status === car_info.status) return new_list[i];
    // }
}

const getOverview = function(carList) {
    const new_list = [];
    carList.forEach(element => {
        const find_node = findNode(element, new_list);
        if(!find_node) {
            new_list.push({type: element.type, status: element.status, total: 1});
        }else {
            find_node.total++;
        }
    });
    console.log(new_list);
}

getOverview(carList)