#include <stdio.h>

//1.target在所有元素之前
//2.target在所有元素之后
//3.target插入数组中的位置
//4.target等于数组中某个元素
int searchInsert(int* nums, int numsSize, int target){
        int left =0;
        int mid =0;
        int right = numsSize - 1; 
        // [] 
        while(left <= right){
            mid = (right + left) / 2; 
            if(target < nums[mid]){
                right = mid -1;
            }else if( target > nums[mid]){
                left = mid + 1; 
            }else {
                return mid;
            }
        }
        return right + 1;
}


int main() {
    int nums[] = {1, 3, 5, 7};
    int numsSize = 4;
    int target = 0;
    int result = searchInsert(nums, numsSize, target);
    printf("result: %d\n", result);
    return 0;
}