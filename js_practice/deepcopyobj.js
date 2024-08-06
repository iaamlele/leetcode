// 浅拷贝

const obj = {
    "lele": 22,
    "haohao": 23,
    "sex": {
        "0": "woman",
        "1": "man"
    }
}

const copyobj = {}

function deepCopy(obj) {
    //对象的遍历和数组遍历不一样
    for(let i in obj) {
        if(typeof(obj[i]) === 'obj') {
            copyobj[i] = deepCopy(obj[i]);
        }else {
            copyobj[i] = obj[i];
        }
    }
    return copyobj;
}

deepCopy(obj);
console.log(copyobj);
console.log(obj === copyobj);