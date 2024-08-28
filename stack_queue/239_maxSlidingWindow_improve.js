/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 方法二:单调队列,思想难,多复习
var maxSlidingWindow = function(nums, k) {
    class MonoQueue {
        constructor() {
            this.queue = [];
        }
        // 单调队列(单调递减)
        enqueue(value) {
            let back = this.queue[this.queue.length - 1];
            // console.log(this.queue, "back equals:", back, value);
            while(back !== undefined && back < value) {
                this.queue.pop();
                back = this.queue[this.queue.length - 1];
            }
            this.queue.push(value);
        }
        dequeue(value) {
            let front = this.front();
            if(front === value) {
                this.queue.shift();
            }
        }
        front() {
            return this.queue[0];
        }
    }
    let helperQueue = new MonoQueue();
    let i = 0, j = 0;
    let resArr = [];
    while(j < k) {
        helperQueue.enqueue(nums[j++]);
    }
    resArr.push(helperQueue.front());
    while(j < nums.length) {
        // console.log(i, j);
        helperQueue.enqueue(nums[j]);
        // console.log("OK, enqueue", helperQueue.queue);
        helperQueue.dequeue(nums[i]);
        // console.log("OK, dequeue", helperQueue.queue);
        resArr.push(helperQueue.front());
        i++, j++;

    }
    return resArr;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));