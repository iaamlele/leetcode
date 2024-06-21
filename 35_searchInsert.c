#include <stdio.h>

int searchInsert(int* nums, int numsSize, int target) {
    int head = 0;
    int tail = numsSize - 1;
    int middle = (head + tail) / 2;
    if(target < nums[head]) {
        return 0;
    }else if(target > nums[tail]) {
        return numsSize;
    }
    while(head <= tail) {
        if(nums[middle] > target) {
            tail = middle - 1;
            middle = (head + tail) / 2;
        }else if(nums[middle] < target) {
            head = middle + 1;
            middle = (head + tail) / 2;
        }else if(nums[middle] == target) {
            return middle;
        }else {
            return head - 1;
        }
    }
    return middle;
}

int main() {
    int nums[] = {1, 3, 5, 6};
    int numsSize = 4;
    int target = 2;
    int result = searchInsert(nums, numsSize, target);
    printf("result: %d\n", result);
    return 0;
}