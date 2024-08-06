const obj = {
    "lele": 22,
    "haohao": 23,
    "sex": {
        "0": "woman",
        "1": "man"
    }
}

const newObj = {}

function deepCopy(obj) {
    const stack = [];
    for(let i in obj) {
        stack.push({k: i, v: obj[i], target: newObj});
    }
    while(stack.length) {
        const item = stack.pop();
        const k = item.k;
        const v= item.v;
        const target = item.target;
        if(typeof(v) === 'object') {
            target[k] = {};
            for(let i in v) {
                stack.push({k: i, v: v[i], target: target[k]});
            }
            stack.push();
        }else {
            target[k] = v;
        }
    }
    return newObj;
}

deepCopy(obj);
console.log(newObj);
console.log(obj === newObj);