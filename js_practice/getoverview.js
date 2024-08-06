let carList = [
    {id: 1, type: '小轿车', status: '在线'},
    {id: 2, type: '小轿车', status: '在线'},
    {id: 3, type: '小轿车', status: '离线'},
    {id: 4, type: '小轿车', status: '在线'},
    {id: 5, type: '小轿车', status: '在线'},
    {id: 6, type: '大货车', status: '在线'},
    {id: 7, type: '大货车', status: '离线'}
]
const newlist = []

function findnode(newlist, type, status) {
    let flag = 0;
    for(let i = 0; i < newlist.length; i++) {
        if(newlist[i].type === type && newlist[i].status === status) {
            flag = 1;
            return newlist[i];
        }
    }
    return flag;
}

function getOverview(carList) {
    for(let i = 0; i < carList.length; i++) {
        const node = findnode(newlist, carList[i].type, carList[i].status);
        if(node) {
            node.total++;
        }else {
            newlist.push({'type': carList[i].type, 'status': carList[i].status, 'total': 1});
        }
    }
}

getOverview(carList);
console.log(newlist);