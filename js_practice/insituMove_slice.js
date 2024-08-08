function insituMove(list) {
    let num = 0;
    for(let i = 0; i < list.length - num; i++) {
        if(list[i] === 0) {
            list = list.slice(0, i).concat(list.slice(i + 1, list.length));
            list.push(0);
            i--;
            num++;
        }
    }
    return list;
}

console.log(insituMove([1, 2, 0, 3, 4, 0, 1, 2]));