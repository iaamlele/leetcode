/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

// 思路:四个数组拆分为两两数组,用hash map查找匹配项
// 四层for循环超时->改为两层for循环,用hash map存前两个数组出现的值和次数,再用hash map检测0-(num3[i] + num4[j])是否出现,并统计数量
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const hash = {};
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if(hash[nums1[i] + nums2[j]] === undefined) {
                hash[nums1[i] + nums2[j]] = 1;
            }else {
                hash[nums1[i] + nums2[j]]+=1;
            }
        }
    }
    let count = 0;
    for(let i = 0; i < nums3.length; i++) {
        for(let j = 0; j < nums4.length; j++) {
            if(hash[0 - (nums3[i] + nums4[j])] !== undefined) {
                count+=hash[0 - (nums3[i] + nums4[j])];
            }
        }
    }
    return count;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));