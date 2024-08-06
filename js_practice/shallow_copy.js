// 浅拷贝方法:Object.assign(target, obj)
// 如果属性是引用类型（如对象、数组），浅拷贝仅复制引用，而不是复制引用对象本身。因此，浅拷贝后的新对象和原对象共享对同一引用类型的引用。
const obj = {
    "lele": 22,
    "haohao": 23,
    "sex": {
        "0": "woman",
        "1": "man"
    }
}

const target = {
    a: 1,
    b: 2
}

const shallowCopy = Object.assign(target, obj);

console.log(target);
console.log(shallowCopy);
console.log(target === shallowCopy);

shallowCopy.sex[0] = 'animal';
console.log(obj);
