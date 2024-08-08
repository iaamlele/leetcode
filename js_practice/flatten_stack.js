//  这里栈起到的什么作用呢： 记录和回退（eg：递归式学习）,依次能延伸出很多算法    
const newlist = [];
function flatten(arr) {
    const stack = [arr];
    while(stack.length) {
        const item = stack.pop();
        if(Array.isArray(item)) {
            for(let i = item.length - 1; i >= 0; i--) {
                stack.push(item[i]);
            }
        }else {
            newlist.push(item);
        }
    }
    return newlist;
}

flatten([1, 2, 3, [4, 5, 8, [9]]]);
console.log(newlist);