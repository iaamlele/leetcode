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

void printfNode(struct ListNode* current) {
    while(current != NULL) {
        printf("%d ", current->val);
        current = current->next;
    }
}

struct ListNode* removeElements(struct ListNode* head, int val) {
    struct ListNode *tmp = head;
    while(head && head->val == val) {
        tmp = head;
        head = head->next;
        free(tmp);
    }
    struct ListNode *cur = head;
    while(cur && (tmp = cur->next)) {
        if(tmp->val == val) {
            cur->next = tmp->next;
            free(tmp);
        }else {
            cur = cur->next;
        }
    }
    return head;
}

struct ListNode *createListNode(int val) {
    struct ListNode *newlnode = (struct ListNode *)malloc(sizeof(struct ListNode *));
    newlnode->val = val;
    newlnode->next = NULL;
    return newlnode;
}

void deleteListNode(struct ListNode* newlnode) {
    struct ListNode *current = newlnode;
    if(current != NULL) {
        free(newlnode);
        current = current->next;
        newlnode = current;
    }
}

struct ListNode *addNode(struct ListNode* newlnode) {
    newlnode->next = createListNode(2);
    newlnode->next->next = createListNode(6);
    newlnode->next->next->next = createListNode(3);
    newlnode->next->next->next->next = createListNode(4);
    newlnode->next->next->next->next->next = createListNode(5);
    newlnode->next->next->next->next->next->next = createListNode(6);
    return newlnode;
}

int main() {
    struct ListNode *newlnode = createListNode(1);
    newlnode = addNode(newlnode);    

    struct ListNode *currentNode = removeElements(newlnode, 7);
    printfNode(currentNode);
    deleteListNode(currentNode);

    return 0;
}