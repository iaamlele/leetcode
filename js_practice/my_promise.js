// 1.先写promise构造函数：promise参数是一个立即调用函数，接收两个参数，resolve和reject，也都是函数
function MyPromise(executor) {
    // 4.保留this,避免出现this指向不明
    let self = this; 
    // 3. 默认状态是pending, 通过resolve和reject修改状态
    self.mystatus = 'pending';
    // 6.保存成功/失败回调的值
    self.success = undefined; 
    self.error = undefined;

    // ８.异步：存放成功和失败的回调
    self.onSuccessCallbacks = []; 
    self.onErrorCallbacks = [];

    function resolve(success) { 
        // 5.if判断保证 Promise实例状态一旦变更不能再次改变
        if(self.mystatus === 'pending') {
            self.mystatus = 'resolved';
            // 7. 保存最后需要调用的成功/失败的结果
            self.success = success;
            // ８.异步：存放成功和失败的回调
            self.onSuccessCallbacks.forEach(element => {
                element();
            })
        }
    }

    function reject(error) {
        if(self.mystatus === 'pending') {
            self.mystatus = 'reject';
            self.error = error;
            self.onErrorCallbacks.forEach(element => {
                element();
            });
        }
    }

    // 9.增加错误捕获
    try {
        executor(resolve, reject);
    } catch(error) {
        reject(error);
    }
    
}

// 2.then方法
MyPromise.prototype.then = function(successCallback, failureCallback) { //这里应该是普通函数，而不是箭头函数
    let self = this;

    let promiseAgain = new MyPromise((resolve, reject) => {
        if(self.mystatus === 'pending') {
            self.onSuccessCallbacks.push(() => {
                successCallback(self.success)
            });
            self.onErrorCallbacks.push(() => {
                failureCallback(self.error)
            });
        }
        if(self.mystatus === 'resolved') {
            successCallback(self.seccess)
        }
        if(self.mystatus === 'reject') {
            failureCallback(self.error);
        }
    })
    
}

// 测试用例1: 同步
// let promise = new Promise((resolve, reject) => {
//     console.log('start');
//     resolve('success data');
// });

// promise.then(res => {
//     console.log('res', res);
// }, err => {
//     console.log('err', err);
// })

// 测试用例2: 异步
// let promise = new MyPromise((resolve, reject) => {
//     console.log('start');
//     setTimeout(function() {
//         reject('error data')
//     }, 1000);
//     console.log('end');
// })

// promise.then(res => {
//     console.log('res', res);
// }, error => {
//     console.log('err', error);
// });

// 测试用例3: 让Promise抛一个错误
// let promise = new MyPromise((resolve, reject) => {
//     throw new Error('一个错误');
// });
// promise.then(res => {
//     console.log('res', res);
// }, error => {
//     console.log('error', error);
// });

// 测试用例4: 链式调用－－返回普通的值
let promise = new MyPromise((resolve, reject) => {
    resolve('success');
});

promise.then(res => {
    console.log('res:', res);
    return 'aaa';
}).then(res1 => {
    console.log('res1:', res1);
    return 'bbb';
});