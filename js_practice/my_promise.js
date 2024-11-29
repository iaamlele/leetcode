// 1.先写promise构造函数：promise参数是一个立即调用函数，接收两个参数，resolve和reject，也都是函数
function MyPromise(executor) {
    // 4.保留this,避免出现this指向不明
    let self = this; 
    // 3. 默认状态是pending, 通过resolve和reject修改状态
    self.status = 'pending';
    // 6.保存成功/失败回调的值
    self.success = undefined; 
    self.error = undefined;

    // ８.异步：存放成功和失败的回调
    self.onSuccessCallbacks = []; 
    self.onErrorCallbacks = [];

    executor(resolve, reject);

    function resolve(success) { 
        // 5.if判断保证 Promise实例状态一旦变更不能再次改变
        if(self.status === 'pending') {
            self.status = 'resolved';
            // 7. 保存最后需要调用的成功/失败的结果
            self.success = success;
            self.onSuccessCallbacks.push(self.success);
        }
    }

    function reject(err) {
        if(self.status === 'pending') {
            self.status = 'reject';
            self.error = error;
            self.onErrorCallbacks.push(self.error);
        }
    }

}

// 2.then方法
MyPromise.prototype.then = (successCallback, failureCallback) => {
    let self = this;
    if(self.status === 'resolved') {
        successCallback(self.seccess)
    }
    if(self.status === 'reject') {
        failureCallback(self.error);
    }
}

let promise = new Promise((resolve, reject) => {
    console.log('start');
    resolve('success data');
});

promise.then(res => {
    console.log('res', res);
}, err => {
    console.log('err', err);
})