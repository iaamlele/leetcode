// 方法三:hashtable

const order = [
    {date: '4/12', user: '小明', addr: '北京', amount: 5, num: 1},
    {date: '4/13', user: '小明', addr: '北京', amount: 6, num: 2},
    {date: '4/12', user: '小王', addr: '四川', amount: 6, num: 1},
    {date: '4/15', user: '小明', addr: '北京', amount: 7, num: 1},
    {date: '4/16', user: '小王', addr: '四川', amount: 2, num: 2},
    {date: '4/17', user: '小明', addr: '北京', amount: 1, num: 1}
]

const newlist = [];
function aggregation(order, para1, para2) {
    const hash = {};
    order.forEach(item => {
        const key = `${item[para1]}`;
        if(hash[key] === undefined) {
            hash[key] = newlist.length;
            newlist.push({[para1]: item[para1], [para2]: item[para2]});
        }else {
            newlist[hash[key]][para2]+=item[para2];
        }
    })
    return newlist;
}

aggregation(order, 'date', 'amount');
console.log(newlist);