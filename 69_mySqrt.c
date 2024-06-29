#include <stdio.h>

int mySqrt(int x) {
    long long head = 1;
    long long tail = x;
    long long mid;  
    while(head <= tail) {
        mid = (head + tail)/2;
        if(mid * mid < x) {
            head = mid + 1;
        }else if(mid * mid > x) {
            tail = mid - 1;
        }else if(mid * mid == x) {
            return mid;
        }
    }
    return head - 1;
}

int main() {
    int res = mySqrt(5);
    printf("res:%d\n", res);
    return 0;
}