#include <stdio.h>

int removeElement(int* nums, int numsSize, int val) {
    //实际上是思路并没有清晰,要把流程抽象,多种情况要分类,提炼出最精炼的思路,才好写代码
    int l = 0;
    for(int r = 0; r < numsSize; r++) {
        if(nums[r] != val) {
            nums[l] = nums[r];
            l++;
        }
    }
    return l;
        
}

int main() {
    int nums[12] = {0, 1, 3, 3, 1, 3, 3, 2, 2, 3, 3, 4};
    int result = removeElement(nums, 12, 3);
    printf("result:%d\n", result);
    for(int i = 0; i < 12; i++) {
        printf("%d ", nums[i]);
    }

    return 0;
}