const order = [
    {date: '4/12', user: '小明', addr: '北京', amount: 5, num: 1},
    {date: '4/13', user: '小明', addr: '北京', amount: 6, num: 2},
    {date: '4/12', user: '小王', addr: '四川', amount: 6, num: 1},
    {date: '4/15', user: '小明', addr: '北京', amount: 7, num: 1},
    {date: '4/16', user: '小王', addr: '四川', amount: 2, num: 2},
    {date: '4/17', user: '小明', addr: '北京', amount: 1, num: 1}
]

const aggregation = function(order, target, aggre) {
    const new_list = [];
    const hashTable = {};
    for(let i = 0; i < order.length; i++) {
        const key = `${order[i][target]}}`;
        if(hashTable[key] === undefined) {
            hashTable[key] = new_list.length; // 注意这里
            // new_list.push({target: order[i].target, aggre: order[i].aggre}); // 这样写会被认为是字符串，而不是变量名
            // 方法二：使用语法糖
            new_list.push({[target]: order[i][target], [aggre]: order[i][aggre]});

            //方法一：
            // const obj = {};
            // obj[target] = order[i][target];
            // obj[aggre] = order[i][aggre];
            // new_list.push(obj);

        }else {
            new_list[hashTable[key]][aggre]+=order[i][aggre];
        }
    }
    console.log(new_list);
}

aggregation(order, 'date', 'num');