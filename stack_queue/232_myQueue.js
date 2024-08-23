// j中栈的底层实现通常是通过数组 (Array) 来完成的,js中的数组是动态的,适合充当这里的容器
// js中的容器:Array, Object, Map, Set, WeakMap(键只能是对象), WeakSet(值必须是对象), TypedArray(是一种特殊的数组类型，用于处理二进制数据), Buffer(是 Node.js 中提供的类，主要用于操作二进制数据), ArrayBuffer(是一种通用的、固定长度的二进制数据缓冲区), DataView(是一个视图，使得可以以多种数据类型来读取和写入 ArrayBuffer 的内容)
// 栈: 所有元素必须符合先进后出规则，所以栈不提供走访功能，也不提供迭代器(iterator)
// 暂时性死区:用 let、const 或 class 声明的变量可以称其从代码块的开始一直到代码执行到变量声明的位置并被初始化前，都处于一个“暂时性死区”（Temporal dead zone，TDZ）中。
// 当变量处于暂时性死区之中时，其尚未被初始化，并且任何访问其的尝试都将导致抛出 ReferenceError。当代码执行到变量被声明的位置时，变量会被初始化为一个值。如果变量声明中未指定初始值，则变量将被初始化为 undefined。
// 同样情况var声明的变量在暂时性死区中访问会返回"undefined"

// 怎么通过两个栈实现队列? 
// instack: 入队
// outstack: 要pop或者peak,就将栈1内容入栈2(栈2空)

// 这是一个function, 怎么实现为一个类?   这个地方不灵活
// 构造函数是一种创建对象的传统方式，尤其是在 ES6 引入 class 语法之前. 构造函数和 class 在概念上是类似的，都是用来定义对象类型的。但 class 是 ES6 引入的语法糖，使定义对象类型的语法更加简洁和直观
// 创建对象的方法:
// 方法一:传统方法-构造函数
// 方法二:类
// 类实际上是“特殊的函数”，就像你能够定义的函数表达式和函数声明一样，类也有两种定义方式：类表达式和类声明。
var MyQueue = function() {
    this.instack = [];
    this.outstack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.instack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.instack.length !== 0) {
        this.outstack.push(this.instack.pop());
    }
    const result = this.outstack.pop();
    while(this.outstack.length !== 0) {
        this.instack.push(this.outstack.pop());
    }
    return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.instack.length !== 0) {
        this.outstack.push(this.instack.pop());
    }
    const result = this.outstack[this.outstack.length - 1];
    while(this.outstack.length !== 0) {
        this.instack.push(this.outstack.pop());
    }
    return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.instack.length === 0) {
        return true;
    }else {
        return false;
    }
};

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);

var param_2 = obj.pop();
console.log(param_2);

var param_3 = obj.peek();
console.log(param_3);

var param_4 = obj.empty();
console.log(param_4);

console.log(obj.instack);
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */