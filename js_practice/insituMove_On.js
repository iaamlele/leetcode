
function insituMove(list) {
    let i = 0;
    let j = 0;
    while(i < list.length && j < list.length) {
        if(list[i] !== 0) {
            i++;
            j++;
        }else {
            if(list[j] !== 0) {
                let tmp = list[j];
                list[j] = list[i];
                list[i] = tmp;
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