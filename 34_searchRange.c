/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    int left = 0;
    int right = numsSize - 1;
    int mid;
    int *returned_array;

    while(left <= right) {
        mid= (right + left) / 2;
        if(nums[mid] < target) {
            left = mid + 1;
        }else if(nums[mid] > target) {
            right = mid - 1;
        }else {
            returned_array = (int *)malloc(sizeof(int *) * (right - left));
            if(left == right) {
                returned_array[0] = nums[left];
            }else {
                int tmp = 0;
                for(int i = left; i <= right; i++) {
                    returned_array[tmp] = i;
                    tmp++;
                }
            }
            return returned_array;
        }

    }
    returned_array = (int *)malloc(sizeof(int *) * 2);
    returned_array[0] = returned_array[1] = -1;
    return returned_array;
}

int main() {
    int numSize = 6;
    int nums[6] = {5, 7, 7, 8, 8, 10};
    int target = 8;
    int *returnSize;
    int *results;
    results = searchRange(nums, numSize, target, returnSize);
    printf("[0]:%d", results[0]);
}