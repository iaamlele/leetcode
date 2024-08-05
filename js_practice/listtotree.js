// 总结--暴力法
// 1.不知道怎么在tree中找到某个节点
// 2.查找的list使用newList而不是list
// 3.注意错误Uncaught SyntaxError: redeclaration of const list
//  因为:某个变量名称已经作为函数参数出现了，但是又使用了 let 在函数体里重声明了。在 JavaScript 中不允许使用 let 在相同的函数或块范围内重新声明相同的变量。
// 4.最后使用函数调用,而非直接打印,感受整体
function findNode(list, id) {
    for(let i = 0; i < list.length; i++) {
        if(list[i].id === id) {
            return list[i];
        }
        if(list[i].childrens) {
            const node = findNode(list[i].childrens, id);
            if(node) {
                return node;
            }
        }
    }
}

function listtotree(list) {
    const newList = []
    for(let i = 0; i < list.length; i++) {
        if(list[i].parent === null) {
            newList.push({'id':list[i].id, 'value': list[i].value, 'childrens': []});
        }else {
            const node = findNode(newList, list[i].parent);
            node.childrens = node.childrens || [];
            node.childrens.push({'id':list[i].id, 'value': list[i].value});
        }
    }
    return newList;
}

listtotree([
    {id: 0, parent: null, value: 1},
    {id: 1, parent: 0, value: 2},
    {id: 2, parent: 0, value: 3},
    {id: 3, parent: 0, value: 4},
    {id: 4, parent: 3, value: 5},
    {id: 5, parent: 3, value: 6},
]);
