/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    // Map.prototype.set(): Map 实例的 set() 方法会向 Map 对象添加或更新一个指定的键值对。
    let sk = [];
    let map = new Map();
    for(let i = 0; i < nums2.length; i++) {
        while(sk.length && nums2[i] > nums2[sk[sk.length - 1]]) {
            let index = sk.pop();
            map.set(nums2[index], nums2[i]);
        }
        sk.push(i);
    }

    let res = [];
    for(let i = 0; i < nums1.length; i++) {
        res[i] = map.get(nums1[i]) || -1;
    }
    
    return res;
};

console.log(nextGreaterElement([1,3,5,2,4], [5,4,3,2,1]));