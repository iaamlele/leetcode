#include <stdio.h>
#include <stdlib.h>
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
typedef struct hashnode {
    int val;
    struct hashnode *next;
} HashNode;

typedef struct hashlist {
    HashNode *head;
} HashList;

struct hashList *create_hashlist() {
    HashList *list = (HashList *)malloc(sizeof(struct hashlist));
    HashNode *head = (HashNode *)malloc(sizeof(struct hashnode));
    head->val = 0;
    list->head = head;
    HashNode *ptr = head;
    for(int i = 0; i < 26; i++) {
        HashNode *node = (HashNode *)malloc(sizeof(struct hashnode));
        node->val = 0;
        ptr->next = node;
        ptr = node;
    }
    return list;
}

int hash(char *s) {
    return ((int)s % 26);
}

void deposit_hashlist(struct hashlist *hashlist, int hash) {
    struct hashnode *head = hashlist->head;
    for(int i = 0; i != hash; i++) {
        head = head->next;
    }
    head->val+=1;
}

int* intersection(int* nums1, int nums1Size, int* nums2, int nums2Size, int* returnSize) {
    struct hashlist *list = create_hashlist();
    while(nums1Size--) {
        deposit_hashlist(list, hash(nums1++));
    }
    int falg = 1;
    
}

void remove_hashlist(struct hashlist *hashlist) {
    struct hashnode *head = hashlist->head;
    struct hashnode *node = head->next;
    while(head) {
        free(head);
        head = node;
        node = node->next;
    }
    free(hashlist);
}

int main() {
    int *nums1 = {1, 2, 2, 1};
    int *nums2 = {2, 2};
    int *returnsize = 2;
    int *result = intersection(nums1, 4, nums2, 2, returnsize);
    for(int i = 0; i < *result; i++) {
        printf("%d ", result[i]);
    }
    return 0;
}