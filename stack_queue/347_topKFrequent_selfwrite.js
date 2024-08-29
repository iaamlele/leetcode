/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// (a, b) => a - b; 升序/小顶堆
// (a, b) => b - a; 降序/大顶堆

// 比较函数:
// 返回负值，表示 index1 的元素在 index2 的元素之前; 
// 返回零，表示两个元素相等，顺序不变; 
// 返回正值，表示 index1 的元素在 index2 的元素之后。
class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.queue = [];
    }
    push(item) {
        this.queue.push(item);

        // 上浮
        let index = this.size() - 1;
        let parent = Math.floor((index - 1) / 2);
        while(parent >= 0 && this.compare(parent, index) > 0) { // 这个地方很卡壳
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    pop() {
        // 边界需重新思考! 不应该是<=0
        if(this.size <= 1) {
            return this.queue.pop();
        }

        const pop_node = this.queue[0];
        this.queue[0] = this.queue.pop();
        // 下沉
        let index = 0;
        let left = 1;
        let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        while(this.compare(index, searchChild) > 0) { // 这个地方很卡壳
            [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];
            index = searchChild;
            left = index * 2 + 1;
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }
        return pop_node;
    }
    size() {
        return this.queue.length;
    }
    compare(item1, item2) {
        if(this.queue[item1] === undefined) return 1; // undefined 的位置通常表示没有实际的元素，应该让实际存在的元素优先。
        if(this.queue[item2] === undefined) return -1;
        return this.compareFn(this.queue[item1], this.queue[item2]);
    }
}

var topKFrequent = function(nums, k) {
    // 1.统计元素出现频率
    const nums_map = new Map();
    for(const item of nums) {
        // 不能写成nums_map.get(item) += 1,会报错,因为+=要求左边是可赋值的左操作数,但是nums_map.get(item)返回的是一个值,而不是一个可以直接赋值的对象属性或变量。
        nums_map.set(item, (nums_map.has(item) ? nums_map.get(item) + 1 : 1));
        //简便写法:
        // nums_map.set(item, (nums_map.get(item) || 0) + 1);
    }
    // console.log(nums_map);

    // 2.对频率进行排序
    // 3.小顶堆保留前K个高频元素
    const heap_sort = new Heap((a, b) => a[1] - b[1]); // 创建小顶堆
    
    for(const entry of nums_map.entries()) {
        // console.log(entry);
        heap_sort.push(entry);

        if(heap_sort.size() > k) {
            heap_sort.pop();
        }
    }
    // console.log(heap_sort.queue);

    // 将堆中内容倒序pop到数组, 返回
    const result = [];
    for(let i = heap_sort.size() - 1; i >= 0; i--) {
        result[i] = heap_sort.pop()[0];
    }
    return result;
    
};

console.log(topKFrequent([1,1,1,2,2,3], 2));