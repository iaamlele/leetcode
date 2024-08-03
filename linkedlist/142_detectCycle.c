#include <uthash.h>
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

struct hashTable {
    struct ListNode *key;
    UT_hash_handle hh;
};
struct hashTable *hashtable;

struct hashTable *find(struct ListNode *ikey) {
    struct hashTable *tmp;
    HASH_FIND_PTR(hashtable, &ikey, tmp);
    return tmp;
}

void insert(struct ListNode *ikey) {
    struct hashTable *tmp = (struct hashTable *)malloc(sizeof(struct hashTable));
    tmp->key = ikey;
    HASH_ADD_PTR(hashtable, key, tmp);
}

struct ListNode *detectCycle(struct ListNode *head) {
    hashtable = NULL;
    while(head != NULL) {
        if(find(head) != NULL) {
            return head;
        }
        insert(head);
        head = head->next;
    }
    return 0;
}