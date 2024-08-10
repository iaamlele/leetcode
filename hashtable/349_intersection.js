/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Set转array: 展开语法
var intersection = function(nums1, nums2) {
    const intersect = new Set(nums1);
    let result = [];
    nums2.forEach(item => {
        if(intersect.has(item)) {
            result.push(item);
        }
    })
    result = new Set(result); 

    return [...result];
};

const nums1 = [4, 9, 5];
const nums2 = [9,4,9,8,4];
console.log(intersection(nums1, nums2));