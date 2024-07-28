#include <stdio.h>
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

struct ListNode* removeElements(struct ListNode* head, int val) {
    struct ListNode *current;
    if(head != NULL) {
        current = head;
        if(current->val == val && head->next == NULL) {
            free(head);
            return head;
        }
        if(head->next->val == val) {
            head = head->next;
            current->next = current->next->next;
            free(head);
            head = current;
        }else {
            head = head->next;
            current = current->next;
        }
    }else {
        return head;
    }
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

void printfNode(struct ListNode* current) {
    while(current != NULL) {
        printf("%d ", current->val);
        current = current->next;
    }
}

int main() {
    struct ListNode *newlnode = createListNode(1);

    newlnode->next = createListNode(2);
    newlnode->next->next = createListNode(6);
    newlnode->next->next->next = createListNode(3);
    newlnode->next->next->next->next = createListNode(4);
    newlnode->next->next->next->next->next = createListNode(5);
    newlnode->next->next->next->next->next->next = createListNode(6);

    struct ListNode *currentNode = removeElements(newlnode, 6);
    printfNode(currentNode);

    return 0;
}