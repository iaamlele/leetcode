#include <stdio.h>
#include <limits.h>
#define INT_MAX __INT_MAX__

int minSubArrayLen(int target, int* nums, int numsSize) {
    int i = 0;
    int sum = 0;
    int min_len = INT_MAX;
    for(int j = 0; j < numsSize; j++) {
        sum+=nums[j];
        while(sum >= target) {
            int subLen = j - i + 1;
            min_len = min_len > subLen? subLen: min_len;
            sum-=nums[i++];          
        }
    }
    return min_len == INT_MAX? 0: min_len;
}

int main() {
    int nums[5] = {1,2,3,4,5};
    int numsSize = 5;
    int target = 15;
    int result = minSubArrayLen(target, nums, numsSize);
    printf("%d\n", result);

    return 0;
}