#include <stdio.h>
#include <stdlib.h>
//双向链表:在设计链表的时候设计两层,一层是node,一层管理整个链表头尾
// 实头节点这个地方的传参有问题,虚拟头节点...,定义头和尾
typedef struct myListNode{
    int val;
    struct myListNode *prev;
    struct myListNode *next;
} MyListNode;

typedef struct LinkedList{
    int count;
    struct myListNode *head;
    struct myListNode *tail;
} MyLinkedList;

// 使用malloc的地方,都要判断是否申请成功(是否为null)
MyLinkedList* myLinkedListCreate() {
    MyLinkedList *mylinklist = (MyLinkedList *)malloc(sizeof(MyLinkedList));
    if(mylinklist != NULL) {
        mylinklist->count = -1;
        mylinklist->head = NULL;
        mylinklist->tail = NULL;
    }else {
        return NULL;
    }
    return mylinklist;
}

int myLinkedListGet(MyLinkedList* obj, int index) {
    MyListNode *current = obj->head;
    if(index > obj->count) {
        return -1;
    }else {
        int i = 0;
        while(i != index) {
            current = current->next;
            i++;
        }
        return current->val;
    }
}


void myLinkedListAddAtHead(MyLinkedList* obj, int val) {
    MyListNode *current = (MyListNode *)malloc(sizeof(MyListNode));
    if(current != NULL) {
        current->val = val;
        if(obj->head != NULL) {
            current->next = obj->head;
            obj->head->prev = current;
            current->prev = NULL;
        }else {
            current->next = NULL;
            current->prev = NULL;
            obj->tail = current;
        }
        obj->head = current;
        obj->count++;
    }
}

void myLinkedListAddAtTail(MyLinkedList* obj, int val) {
    MyListNode *current = (MyListNode *)malloc(sizeof(MyListNode));
    if(current != NULL) {
        current->val = val;
        current->next = NULL;
        if(obj->tail != NULL) {
            obj->tail->next = current;
            current->prev = obj->tail;
            obj->tail = current;
        }else {
            current->prev = NULL;
            obj->tail = current;
            obj->head = current;
        }
        obj->count++;
    }
}

void myLinkedListAddAtIndex(MyLinkedList* obj, int index, int val) {
    //current不需要malloc
    MyListNode *current = obj->head;
    if(index <= obj->count + 1) {
            
        if(index == 0) {
            myLinkedListAddAtHead(obj, val);
        }else if(index == obj->count + 1) {
            myLinkedListAddAtTail(obj, val);
        }else {
            int i = 0;
            while(i < index - 1) {
                current = current->next;
                i++;
            }
            MyListNode *node = (MyListNode *)malloc(sizeof(MyListNode));
            node->val = val;
            node->next = current->next;
            current->next->prev = node;
            current->next = node;
            node->prev = current;
            obj->count++;   
        }              
    }
}

void myLinkedListDeleteAtIndex(MyLinkedList* obj, int index) {
    MyListNode *current = obj->head;
    if(current != NULL) {
        if(index <= obj->count && index >= 0) {
            if(index == 0) {
                obj->head = current->next;
                if(obj->head == NULL) {   //这里多考虑一步
                    obj->tail = NULL;
                }else {
                    obj->head->prev = NULL;
                }
                free(current);
            }else if(index == obj->count) {
                current = obj->tail;
                obj->tail = current->prev;
                if(obj->tail == NULL) {   //这里多考虑一步
                    obj->head = NULL;
                }else {
                    obj->tail->next = NULL;
                }
                free(current);
            }else {
                for(int i = 0; i < index; i++) {
                    current = current->next;
                }
                // 不需要分配新的节点来删除节点
                current->prev->next = current->next;
                if(current->next != NULL) {
                    current->next->prev = current->prev;
                }
                free(current);
            }
            obj->count--;  
                     
        }
    }
}

void myLinkedListFree(MyLinkedList* obj) {
    MyListNode *current = obj->tail;
    while(current != NULL) {
        obj->tail = obj->tail->prev;
        free(current);
        current = obj->tail;
    }
    free(obj);    
}

void printflinkedlist(MyLinkedList* obj) {
    MyListNode *current = obj->head;
    while(current) {
        printf("%d ",current->val);
        current = current->next;
    }
    printf("\n");
}

int main() {
    MyLinkedList* obj = myLinkedListCreate();
    // myLinkedListAddAtHead(obj, 1);
    // myLinkedListAddAtTail(obj, 3);
    myLinkedListAddAtIndex(obj, 0, 10);
    myLinkedListAddAtIndex(obj, 0, 20);
    myLinkedListAddAtIndex(obj, 0, 30);

    int num = myLinkedListGet(obj, 0);
    printf("num:%d\n", num);

    printflinkedlist(obj);
    
    // myLinkedListDeleteAtIndex(obj, 1);
    
    // printflinkedlist(obj);

    myLinkedListFree(obj);

    return 0;
}
