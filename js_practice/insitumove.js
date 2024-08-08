// 原地把数组中的0移动到末尾:[1, 2, 0, 3, 4, 0, 1, 2]变成[1, 2, 3, 4, 1, 2, 0, 0]

function remove_to_tail(list, i) {
    const item = list[i];
    for(let j = i + 1; j < list.length; j++) {
        list[j - 1] = list[j];
    }
    list[list.length - 1] = item;
    return list;
}

function insituMove(list) {
    for(let i = 0; i < list.length; i++) {
        if(list[i] === 0) {
            remove_to_tail(list, i);
        }
    }
    return list;
}

console.log(insituMove([1, 2, 0, 3, 4, 0, 1, 2]));