#include <stdio.h>
#include <stdlib.h>

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * woc题没读懂啊我的仙人,人家说的还是挺清楚的,是返回的matrix和returnColumnSizes必须malloc哈哈
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** generateMatrix(int n, int* returnSize, int** returnColumnSizes) {
    // 声明一个二维数组
    // malloc分配的二维数组是按行优先（row-major order）存储的
    int **matrix = (int **)malloc(sizeof(int *) * n);
    for(int i = 0; i < n; i++) {
        matrix[i] = (int *)malloc(sizeof(int) * n);
    }

    *returnSize = n;
    // 为二维数组赋值
    *returnColumnSizes = (int *)malloc(sizeof(int) * n);
    for(int i = 0; i < n; i++) {
        (*returnColumnSizes)[i] = n;
    }
    
    int num = 1;
    int start = 0;
    int end = n - 1;
    while(num <= n * n) {
        // 横右
        printf("num:%d\n", num);
        for(int i = start; i < end; i++) {
            // 为二位数组赋值
            matrix[start][i] = num++;
            printf("hy,matrix[%d][%d], num:%d\n", start, i, num);
        }

        // 竖下
        for(int i = start; i < end ; i++) {
            matrix[i][end] = num++;
            printf("sx,matrix[%d][%d], num:%d\n", i, end, num);
        }

        // 横左
        for(int i = end; i > start; i--) {
            matrix[end][i] = num++;
            printf("hz,matrix[%d][%d], num:%d\n", end, i, num);
        }

        // 竖上
        for(int i = end; i > start; i--) {
            matrix[i][start] = num++;
            printf("ss,matrix[%d][%d], num:%d\n", i, start, num);
        }
        start++;
        end--;
        if(start > 10) {
            return NULL;
        }
        printf("start:%d, end:%d\n", start, end);
    }
    return matrix;  
}

int main () {
    // 指针声明后必须初始化,传递给它地址,否则段错误
    // 指针的初始化和声明,赋值??  还不熟练
    int returnSize;
    int *returnColumnSizes;
    int n = 3;
    int **matrix = generateMatrix(n, &returnSize, &returnColumnSizes);
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    for(int i = 0; i < n; i++) {
        free(matrix[i]);
    }
    free(matrix);
    return 0;
}