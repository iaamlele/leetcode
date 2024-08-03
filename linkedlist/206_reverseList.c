#include <stdio.h>
#include <stdlib.h>
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

typedef struct ListNode {
    int val;
    struct ListNode *next;
} MyListNode;

struct ListNode* reverseList(struct ListNode* obj) {
    struct ListNode *prev = NULL;
    struct ListNode *current = obj;
    while(current) {
        struct ListNode *next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    return prev;
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
    addNodeAtHead(obj, 5);
    printfList(obj);
    
    printf("\n");
    struct ListNode *reverselist = reverseList(obj);
    printfList(reverselist);
    freeList(obj);
    return 0;
}