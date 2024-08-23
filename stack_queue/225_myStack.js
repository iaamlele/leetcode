// 思路: 操作栈顶元素(出栈/返回栈顶元素)->除了最后一个,将inqueue放入outqueue
// Array.prototype.shift(): 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
// Array.prototype.unshift(): 方法将指定元素添加到数组的开头，并返回数组的新长度。
var MyStack = function() {
    this.inqueue = [];
    this.outqueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.inqueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    while(this.inqueue.length - 1 !== 0) {
        this.outqueue.push(this.inqueue.shift());
    }
    const result = this.inqueue.pop();
    while(this.outqueue.length !== 0) {
        this.inqueue.push(this.outqueue.shift());
    }
    return result;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    while(this.inqueue.length - 1 !== 0) {
        this.outqueue.push(this.inqueue.shift());
    }
    const result = this.inqueue[0];
    this.outqueue.push(this.inqueue.shift());
    while(this.outqueue.length !== 0) {
        this.inqueue.push(this.outqueue.shift());
    }
    return result;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.inqueue.length !== 0) {
        return false;
    }else {
        return true;
    }
};

var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);

var param_2 = obj.pop();
console.log(param_2);

var param_3 = obj.top();
console.log(param_3);

var param_4 = obj.empty();
console.log(param_4);
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */