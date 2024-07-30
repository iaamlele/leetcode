#include <stdio.h>
#include <stdlib.h>


typedef struct LinkedList{
    int val;
    struct LinkedList *prev;
    struct LinkedList *next;
} MyLinkedList;


MyLinkedList* myLinkedListCreate() {
    MyLinkedList *mylinklist = (MyLinkedList *)malloc(sizeof(MyLinkedList *));
    if(mylinklist != NULL) {
        mylinklist->next = NULL;
        mylinklist->prev = NULL;
    }else {
        return NULL;
    }
    return mylinklist;
}

int myLinkedListGet(MyLinkedList* obj, int index) {
    MyLinkedList *findnode = obj;
    int length = 0;
    while(findnode) {
        findnode = findnode->next;
        length++;
    }
    if(length > index) {
        if(index == 0) {
            return findnode->val;
        }else {
            MyLinkedList *current = obj;
            for(int i = 1; i <= index; i++) {
                current = current->next;
            }
            return current->val;
        }        
    }else {
        return -1;
    }
}

void myLinkedListAddAtHead(MyLinkedList* obj, int val) {
    MyLinkedList *current = (MyLinkedList *)malloc(sizeof(MyLinkedList *));
    if(current != NULL) {
        current->val = val;
        current->next = obj;
        current->prev = NULL;
        obj = current;
    }
}

void myLinkedListAddAtTail(MyLinkedList* obj, int val) {
    MyLinkedList *current = (MyLinkedList *)malloc(sizeof(MyLinkedList *));
    if(current != NULL) {
        current->val = val;
        MyLinkedList *last = obj;
        while(last->next) {
            last = last->next;
        }
        last->next = current;
        current->prev = last;
    }
}

void myLinkedListAddAtIndex(MyLinkedList* obj, int index, int val) {
    MyLinkedList *findnode = obj;
    int length = 0;
    while(findnode) {
        findnode = findnode->next;
        length++;
    }
    if(length > index) {
        MyLinkedList *current = (MyLinkedList *)malloc(sizeof(MyLinkedList *));
        MyLinkedList *lastnode = obj;
        if(current != NULL) {
            if(index == 0) {
                myLinkedListAddAtHead(obj, val);
            }else {
                for(int i = 1; i < index; i++) {
                    lastnode = lastnode->next;
                }
                current->val = val;
                current->next  = lastnode->next;
                lastnode->next->prev = current;
                lastnode->next = current;
                current->prev = lastnode;
            }
            
        }
    }
}

void myLinkedListDeleteAtIndex(MyLinkedList* obj, int index) {
    MyLinkedList *findnode = obj;
    int length = 0;
    while(findnode) {
        findnode = findnode->next;
        length++;
    }
    if(length > index) {
        MyLinkedList *current = (MyLinkedList *)malloc(sizeof(MyLinkedList *));
        MyLinkedList *lastnode = obj;
        if(current != NULL) {
            if(index == 0) {
                current = obj;
                obj = obj->next;
                free(current);
            }else {
                for(int i = 1; i < index; i++) {
                    lastnode = lastnode->next;
                }
                current = lastnode->next;
                lastnode->next->next->prev = lastnode;
                lastnode->next = lastnode->next->next;
                free(current);
            }
            
        }
    }
}

void myLinkedListFree(MyLinkedList* obj) {
    MyLinkedList *current = obj;
    while(obj) {
        obj = obj->next;
        free(current);
        current = obj;
    }
}

int main() {
    MyLinkedList* obj = myLinkedListCreate();
    myLinkedListAddAtHead(obj, 1);
    myLinkedListAddAtTail(obj, 3);

    int index = myLinkedListGet(obj, 1);
    printf("index:%d\n", index);

    myLinkedListAddAtIndex(obj, 1, 2);
    myLinkedListDeleteAtIndex(obj, 1);

    myLinkedListFree(obj);

    return 0;
}
