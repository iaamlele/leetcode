const order = [
    {date: '4/12', user: '小明', addr: '北京', amount: 5, num: 1},
    {date: '4/13', user: '小明', addr: '北京', amount: 6, num: 2},
    {date: '4/12', user: '小王', addr: '四川', amount: 6, num: 1},
    {date: '4/15', user: '小明', addr: '北京', amount: 7, num: 1},
    {date: '4/16', user: '小王', addr: '四川', amount: 2, num: 2},
    {date: '4/17', user: '小明', addr: '北京', amount: 1, num: 1}
]

const newlist = [];
function findNode(newlist, order_para, para1) {
    // 问题4: for(let item in newlist)和for(let item of newlist)的区别
    // for..in:遍历对象的属性名（键）,不遍历数组的元素值
    // for..of:遍历可迭代对象的值，而不是属性名或键
    for(let item of newlist) {
        if(item[para1] === order_para[para1]) {
            return order_para;
        }
    }

    // 问题3: forEach 是一个数组方法，它的回调函数没有办法影响外层函数的返回值。
    // newlist.forEach(item => {// typeof(item) === 'Object', Object使用.访问属性key
    //     // 问题2: 对象有两种访问值的方式:1.obj.key;2.obj[key]  区别在于:1.obj.key用于访问对象静态属性,属性名必须是有效标识符,并且是固定的；2.obj[key]用于动态访问对象属性,属性名通过变量来动态指定
    //     // 这里的para1是函数参数,是动态变量,所以要使用方括号表示法
        
    // })
    return null;
}

// 方法一:高阶函数
// 方法二:hashtable
function aggregation(order, para1, para2) {
    order.forEach(item => {
        const newlist_node = findNode(newlist, item, para1);
        if(newlist_node === null) {
            // 问题1: 对象字面量必须是1.合法标识符;2.数字字面量;3.字符串字面量   如果不是合法标识符,就应该用方括号表示法(包括不合法字符(eg:[" "]), 表达式(eg:[para], 方括号中的表达式会被计算,其结果作为key,这样就允许动态地设置对象的key))
            newlist.push({[para1]: item[para1], [para2]: item[para2]}); 
        }else {
            newlist.forEach(item2 => {
                if(item2[para1] === newlist_node[para1]) {
                    item2[para2]+=newlist_node[para2];
                }
            })
        }
    })
    return newlist;
}

aggregation(order, 'user', 'num');
console.log(newlist);