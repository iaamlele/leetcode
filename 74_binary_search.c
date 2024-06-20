#include <stdio.h>
#include <stdlib.h>

//左毕右毕区间
int search(int* nums, int numsSize, int target) {
    int head = 0;
    int tail = numsSize - 1;
    int middle = (head + tail) / 2;
    while(head <= tail) {
        if(nums[middle] > target) {
            tail = middle - 1;
            middle = (head + tail) /2;
        }else if(nums[middle] < target) {
            head = middle + 1;
            middle = (head + tail) /2;
        }else {
            return middle;
        }
    }
    return -1;
}

int main () {
    int numsSize = 6;
    int nums[] = {-1,0,3,5,9,12};
    int result = search(nums, numsSize, 9);
    printf("result: %d\n", result);
}