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

struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    typedef struct ListNode LISTNODE;
    LISTNODE *fakehead = (LISTNODE *)malloc(sizeof(LISTNODE)); //虚拟头节点必须malloc
    fakehead->next = head;
    int length = 0;
    while(head) {
        length++;
        head = head->next;
    }
    LISTNODE *node = fakehead;
    for(int i = 1; i <= length - n; i++) {
        node = node->next;
    }
    LISTNODE *deletenode = node->next;
    node->next = node->next->next;
    free(deletenode);
    LISTNODE *ans = fakehead->next;
    free(fakehead); 
    return ans;    
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

    int n = 2;
    struct ListNode *nodelist = removeNthFromEnd(obj, 2);
    printfList(nodelist);

    freeList(obj);
    return 0;
}