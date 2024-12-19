let obj = {
    1: 2,
    3: 4,
    5: {
        6: 7
    }
}

const deepCopy = function(obj) {
    const new_obj = {};
    for(let i in obj) {
        if(typeof obj[i] === 'object') {
            new_obj[i] = deepCopy(obj[i]);
        }else {
            new_obj[i] = obj[i];
        }
    }
    return new_obj;
}

console.log(deepCopy(obj));