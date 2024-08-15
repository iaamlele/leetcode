
function insituMove(list) {
    let i = 0;
    let j = 0;
    while(i < list.length && j < list.length) {
        if(list[i] !== 0) {
            i++;
            j++;
        }else {
            if(list[j] !== 0) {
                [list[i], list[j]] = [list[j], list[i]];
                i++;
                j++;
            }else {
                j++;
            }
        }
    }
    return list;
}

console.log(insituMove([1, 2, 0, 3, 4, 0, 1, 2]));