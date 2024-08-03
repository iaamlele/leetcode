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

struct ListNode *getIntersectionNode(struct ListNode *headA, struct ListNode *headB) {
    if(headA == NULL || headB == NULL) {
        return NULL;
    }

    struct ListNode *node_a = headA;
    struct ListNode *node_b = headB;
    
    while(node_a != node_b) {
        //访问空指针的val会段错误!
        node_a = (node_a == NULL)? headB: node_a->next;
        node_b = (node_b == NULL)? headA: node_b->next;  
        
    }
    return node_a;
}

struct ListNode *createList(int val) {
    struct ListNode *obj = (struct ListNode *)malloc(sizeof(struct ListNode));
    if(obj != NULL) {
        obj->val = val;
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
    struct ListNode* obj = createList(1);
    addNodeAtHead(obj, 5);
    addNodeAtHead(obj, 4);
    addNodeAtHead(obj, 8);
    addNodeAtHead(obj, 1);
    addNodeAtHead(obj, 4);
    printfList(obj);
    printf("\n");

    struct ListNode* obj2 = createList(2);
    addNodeAtHead(obj2, 5);
    addNodeAtHead(obj2, 4);
    addNodeAtHead(obj2, 8);
    addNodeAtHead(obj2, 1);
    addNodeAtHead(obj2, 0);
    addNodeAtHead(obj2, 5);
    printfList(obj2);
    printf("\n");

    struct ListNode *nodelist = getIntersectionNode(obj, obj2);
    printf("nodelist:%lld\n", (long long int)nodelist);

    freeList(obj);
    return 0;
}