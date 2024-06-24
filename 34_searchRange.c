/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

//1.target在数组范围的左边或者右边，返回{-1, -1}
//2.target在数组范围中，但是不存在target,返回{-1, -1}
//3.target在数组范围中，且存在target

int getRightBorder(int *nums, int numsSize, int target) {
    int left = 0;
    int right = numsSize - 1;
    int rightBorder = -1;
    while(left <= right) {
        int mid = (right + left) / 2;
        if(nums[mid] > target) {
            right = mid - 1;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }else { //
            rightBorder = mid;
            left = mid + 1;
        }

    }
    return rightBorder;
}

int getLeftBorder(int *nums, int numsSize, int target) {
    int left = 0;
    int right = numsSize - 1;
    int leftBorder = -1;
    while(left <= right) {
        int mid = (left + right) / 2;
        if(nums[mid] > target) {
            right = mid - 1;
        }else if(nums[mid] < target) {
            left = mid + 1;
        }else { //
            leftBorder = mid;
            right = mid - 1;
        }
    }
    return leftBorder;
}

int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    int leftBorder = getLeftBorder(nums, numsSize, target);
    int rightBorder = getRightBorder(nums, numsSize, target);

    *returnSize = 2;
    int *result = (int *)malloc(sizeof(int) * 2);
    result[0] = leftBorder;
    result[1] = rightBorder;
    return result;
}

int main() {
    int numSize = 6;
    int nums[6] = {5, 7, 7, 8, 8, 10};
    int target = 8;
    int a = 2;
    int *resturnSize = &a;
    int *re = searchRange(nums, numSize, target, resturnSize);
    
    for(int i = 0; i < *resturnSize; i++) {
        printf("%d ", re[i]);
    }
    free(re);
}