#include <stdio.h>

int minSubArrayLen(int target, int* nums, int numsSize) {
    int min_len = 0;
    
    for(int i = 0; i < numsSize; i++) {
        if(nums[i] >= target) {
            return 1;
        }
        int k = 0;
        int res = nums[i];
        int len = 1;
        
        for(int j = i + 1; j < numsSize; j++) {
            res+=nums[j];
            len++;
            if(res >= target) {
                printf("min_len:%d, len:%d\n", min_len, len);
                if(min_len != 0) {
                    min_len = (min_len < len) ? min_len:len;
                }else {
                    min_len = (min_len < len) ? len:min_len;
                }
                
            }
        }
        
    }
    
    return min_len;
}

int main() {
    int nums[5] = {1,2,3,4,5};
    int numsSize = 5;
    int target = 15;
    int result = minSubArrayLen(target, nums, numsSize);
    printf("%d\n", result);

    return 0;
}