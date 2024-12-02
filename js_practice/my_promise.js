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
                // 这里每次只会调用一个函数
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
MyPromise.prototype.then = function(onResovled, onRejected) { //这里应该是普通函数，而不是箭头函数
    let self = this;

    let promiseAgain = new MyPromise((resolve, reject) => {
        if(self.mystatus === 'pending') {
            self.onSuccessCallbacks.push(() => {
                let x = onResovled(self.success);
                resolvePromise(promiseAgain, x, resolve, reject);
                // onResovled(self.success)
            });
            self.onErrorCallbacks.push(() => {
                let x = onRejected(self.error);
                resolvePromise(promiseAgain, x, resolve, reject);
                // onRejected(self.error)
            });
        }
        if(self.mystatus === 'resolved') {
            let x = onResovled(self.success);
            resolvePromise(promiseAgain, x, resolve, reject);
            // onResovled(self.seccess)
        }
        if(self.mystatus === 'reject') {
            let x = onRejected(self.error);
            resolvePromise(promiseAgain, x, resolve, reject);
            // onRejected(self.error);
        }
    })
    return promiseAgain;
}

function resolvePromise(promiseAgain, x, resolve,  reject) {
    // 如果x为本身，则结束，防止进入无限回调
    if(promiseAgain === x) { 
        return reject(new TypeError('循环调用'));
    }
    if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
        console.log('OK1');
        try {
            let then = x.then;
            if(typeof then === 'function') {
                then.call(x, (y) => {
                    resolvePromise(promiseAgain, y, resolve, reject);
                }, (e) => {
                    reject(e);
                });
            } else {
                resolve(x);
            }
        } catch (error) {
            reject(error);
        }
    } else { // x为普通值
        resolve(x);
    }
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
// let promise = new MyPromise((resolve, reject) => {
//     resolve('success');
// });

// promise.then(res => {
//     console.log('res:', res);
//     return 'aaa';
// }).then(res1 => {
//     console.log('res1:', res1);
//     return 'bbb';
// });

// 测试用例5: 链式调用
let promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功的回调');
    }, 1000)
});
promise.then((res) => {
    console.log('res: ', res);
    return 'aaaa';
}, (error) => {
    console.log('error: ', error);
}).then((res2) => {
    console.log('res2: ', res2);
    return 'bbbb';
}).then((res3) => {
    console.log('res3 ', res3);
});