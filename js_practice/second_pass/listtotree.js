const findNode = function(list, id) {
    for(let i = 0; i < list.length; i++) {
        if(list[i].id === id) {
            return list[i];
        }
        if(list[i].childrens) {
            const node = findNode(list[i].childrens, id);
            if(node) return node;
        }
    }
}

const listtotree = function(list) {
    const newList = [];
    for(let i = 0; i < list.length; i++) {
        if(list[i].parent === null) {
            newList.push({id:list[i].id, value:list[i].value, childrens:[]});
        } else {
            const find_father = findNode(newList, list[i].parent);
            find_father.childrens = find_father.childrens || [];
            find_father.childrens.push({id:list[i].id, value:list[i].value});
        }
    }
    console.log(newList);
}

listtotree([
    {id: 0, parent: null, value: 1},
    {id: 1, parent: 0, value: 2},
    {id: 2, parent: 0, value: 3},
    {id: 3, parent: 0, value: 4},
    {id: 4, parent: 3, value: 5},
    {id: 5, parent: 3, value: 6},
]);
