/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let start = 0;
    const res = Array(nums1.length).fill(-1);
    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if(nums2[j] === nums1[i]) {
                start = j;
                break;
            }
        }
        let flag = 0;
        for(let j = start + 1; j < nums2.length; j++) {
            console.log(i, j);
            if(nums2[j] > nums1[i]) {
                flag = 1;
                res[i] = nums2[j];
                break;
            }
        }
    }
    return res;
};

console.log(nextGreaterElement([1,3,5,2,4], [5,4,3,2,1]));