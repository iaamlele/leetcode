/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 1.统计元素出现频率: map
// 2.对频率排序: 本题就要使用优先级队列+大顶堆 来对部分频率进行排序。为什么不用快排呢， 使用快排要将map转换为vector的结构，然后对整个数组进行排序， 而这种场景下，我们其实只需要维护k个有序的序列就可以了，所以使用优先级队列是最优的。
//   定义一个大小为k的大顶堆，在每次移动更新大顶堆的时候，每次弹出都把最大的元素弹出去了，那么怎么保留下来前K个高频元素呢。而且使用大顶堆就要把所有元素都进行排序，那能不能只排序k个元素呢？所以我们要用小顶堆，因为要统计最大前k个元素，只有小顶堆每次将最小的元素弹出，最后小顶堆里积累的才是前k个最大元素
// 3.找出前K个高频元素

// 补堆数据结构的知识点,大小顶堆,队列,单调队列,优先队列,最大优先队列,最小优先队列
// 堆? 堆是一棵完全二叉树，树中每个结点的值都不小于（或不大于）其左右孩子的值.  如果父亲结点是大于等于左右孩子就是大顶堆，小于等于左右孩子就是小顶堆。
// 大顶堆:每个父节点的值都大于或等于其子节点的值。根节点是堆中最大的元素。大顶堆通常用于实现最大优先队列
// 小顶堆:每个父节点的值都小于或等于其子节点的值。根节点是堆中最小的元素。小顶堆通常用于实现最小优先队列
// 优先队列:是一种特殊类型的队列，其中每个元素都有一个与之关联的优先级。元素按优先级顺序进行处理，而不是按插入顺序。优先队列通常用于需要根据优先级处理任务的场景。
// 堆的操作:插入O(logn)->将新元素添加到堆的末尾,然后通过"上浮"操作调整堆;  删除O(logn)->将堆顶元素移除,用堆底元素替换堆顶,再通过“下沉”操作重新调整堆

// js没有堆,手写构造堆和优先队列

// Map.prototype.set(): 向 Map 对象添加或更新一个指定的键值对。
class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn; // 不理解这个哪里来的, 怎么用
        this.queue = [];
    }

    push(item) {
        this.queue.push(item);

        //上浮
        let index = this.size() - 1; // 记录推入元素下标
        let parent = Math.floor((index - 1) / 2); // 记录父节点下表
        while(parent >= 0 && this.compare(parent, index) > 0) { // 注意compare参数顺序
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];

            //更新下标
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    // 获取堆顶元素并移除
    pop() {
        // 边界情况，只有一个元素或没有元素应直接弹出
        if(this.size() <= 1) {
            return this.queue.pop();
        }

        // 堆顶元素
        const out = this.queue[0];

        // 移除堆顶元素 填入最后一个元素
        this.queue[0] = this.queue.pop();

        // 下沉
        let index = 0;// 记录下沉元素下标
        let left = 1; // left 是左子节点下标 left + 1 则是右子节点下标
        let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

        while(this.compare(index, searchChild) > 0) { // 注意compare参数顺序   不理解
            [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];

            // 更新下标
            index = searchChild;
            left = 2 * index + 1;
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }
        return out;
    }

    size() {
        return this.queue.length;
    }

    // 使用传入的 compareFn 比较两个位置的元素
    compare(index1, index2) {
        // 处理下标越界问题
        if(this.queue[index1] === undefined) return 1;
        if(this.queue[index2] === undefined) return -1;

        return this.compareFn(this.queue[index1], this.queue[index2]);
    }
}

var topKFrequent = function(nums, k) {
    const map = new Map();
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // 创建小顶堆
    // 比较函数:用于自定义排序规则的函数, 广泛应用于排序函数、优先队列、堆等数据结构中
    // 比较函数在不同上下文中的应用: 
    //  1.排序数组: Array.prototype.sort((a, b) => a - b), 返回负值, a排在b之前; 返回0, a和b顺序不变; 返回正值, b排在a之前
    //  2.优先队列: 比较函数用来决定队列中元素的优先级,例如，最大优先队列需要一个比较函数，确保优先级高的元素排在前面：
            // class MaxPriorityQueue {
            //     constructor() {
            //         this.heap = [];
            //     }
            //     enqueue(element, priority) {
            //         this.heap.push({ element, priority });
            //         this.heap.sort((a, b) => b.priority - a.priority); // 最大优先队列
            //     }
            //     dequeue() {
            //         return this.heap.shift(); // 取出优先级最高的元素
            //     }
            // }
            
            // const maxPQ = new MaxPriorityQueue();
            // maxPQ.enqueue('Task A', 2); // 优先级 2
            // maxPQ.enqueue('Task B', 3); // 优先级 3
            // console.log(maxPQ.dequeue().element); // 输出: Task B
    //  3.堆: 比较函数用于决定堆的结构，比如在大顶堆和小顶堆中分别按照最大值或最小值调整堆的顺序：

    // 如果 a[1] - b[1] 是负值，则 a 在 b 之前（即，a 的优先级低于 b，对于小顶堆，优先级低的元素会靠近堆顶）;如果是零，则 a 和 b 在堆中的相对位置不变; 如果是正值，则 b 在 a 之前（即，a 的优先级高于 b）。
    const heap = new Heap((a, b) => a[1] - b[1]);

    // Map.prototype.entries():返回一个新的 map 迭代器对象，该对象包含了此 map 中的每个元素的 [key, value] 对，按插入顺序排列。
    // entry 是一个长度为2的数组，0位置存储key，1位置存储value
    for(const entry of map.entries()) {
        heap.push(entry);

        if(heap.size() > k) { // 不理解
            heap.pop();
        }
    }

    const res = [];

    for(let i = heap.size() - 1; i >= 0; i--) {
        res[i] = heap.pop()[0]; // 不理解
    }
    return res;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));