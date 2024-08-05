#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#define bool _Bool

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

void remove_from_hashlist(struct hashlist *hashlist, int hash) {
    struct hashnode *head = hashlist->head;
    for(int i = 0; i != hash; i++) {
        head = head->next;
    }
    head->val-=1;
}

bool isAnagram(char* s, char* t) {
    struct hashlist *hashlist = create_hashlist();
    while(s++) {
        deposit_hashlist(hashlist, hash(s));       
    }
    while(t++) {
        remove_from_hashlist(hashlist, hash(t));
    }

    struct hashnode *head = hashlist->head;
    int flag = 1;
    for(int i = 0; i < 26; i++) {
        if(head->val != 0) {
            flag = 0;
            break;
        }
        head = head->next;
    }

    return flag;
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
    char *s = "anagram";
    char *t = "nagaram";
    
    printf("result is:%d\n", (int)isAnagram(s, t));
   
    return 0;
}