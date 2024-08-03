#include <stdio.h>
#include <stdlib.h>
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* swapPairs(struct ListNode* head) {
    // 虚拟节点
    typedef struct ListNode LISTNODE;
    LISTNODE *facknode = (struct ListNode *)malloc(sizeof(struct ListNode));
    facknode->next = head;
    struct ListNode *left = facknode;
    struct ListNode *right = left->next;
    // 使用双指针可以避免第三个指针
    while(left && right && right->next) {
        left->next = right->next;
        right->next = left->next->next;
        left->next->next = right;
        left = right;
        right = right->next;        
    }
    return facknode->next;
}

struct ListNode *createList() {
    struct ListNode *obj = (struct ListNode *)malloc(sizeof(struct ListNode));
    if(obj != NULL) {
        obj->next = NULL;
        return obj;
    }else {
        return NULL;
    }    
}

void freeList(struct ListNode* obj) {
    struct ListNode *current = obj;
    while(obj) {
        obj = obj->next;
        free(current);
        current = obj;
    }
}

void printfList(struct ListNode* obj) {
    struct ListNode *current = obj;
    while(current) {
        printf("%d ", current->val);
        current = current->next;
    }
}

void addNodeAtHead(struct ListNode* obj, int val) {
    struct ListNode *current = (struct ListNode *)malloc(sizeof(struct ListNode));
    current->val = val;
    current->next = NULL;
    if(obj->next == NULL) {
        obj->next = current;
    }else {
        current->next = obj->next;
        obj->next = current;
    }
}

int main() {
    struct ListNode* obj = createList();
    addNodeAtHead(obj, 1);
    addNodeAtHead(obj, 2);
    addNodeAtHead(obj, 3);
    addNodeAtHead(obj, 4);
    printfList(obj);
    
    printf("\n");

    struct ListNode *swap = swapPairs(obj);
    printfList(swap);

    freeList(obj);
    return 0;
}