let obj = {
    1: 2,
    3: 4,
    5: {
        6: 7
    }
}

const deepCopy = function(obj) {
    const json = JSON.stringify(obj);
    return JSON.parse(json);
}

const copy = deepCopy(obj);
console.log(copy);
console.log(copy === obj);