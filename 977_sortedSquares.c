#include <stdio.h>
#include <stdlib.h>

int* sortedSquares(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)malloc(sizeof(int) * numsSize);
    if (result == NULL) {
        return NULL; // 分配失败，返回 NULL
    }

    int left = 0;
    int right = numsSize - 1;
    int pos = numsSize - 1;

    while (left <= right) {
        if (abs(nums[left]) > abs(nums[right])) {
            result[pos] = nums[left] * nums[left];
            left++;
        } else {
            result[pos] = nums[right] * nums[right];
            right--;
        }
        pos--;
    }

    return result;
}

int main() {
    int numSize = 5;
    int nums[5] = {1, 2, 3, 7, 5};
    int returnSize;
    int *result = sortedSquares(nums, 5, &returnSize);

    if(result != NULL) {
        for(int i = 0; i < numSize; i++) {
            printf("%d ", result[i]);
        }
        free(result);
    }

    return 0;
}