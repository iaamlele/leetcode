/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

var connect = function(root) {
    if(!root) return root;
    const que = [root];

    while(que.length) {
        let length = que.length;
        for(let i = 0; i < length; i++) {
            const node = que.shift();

            //改进:
            if(i < length - 1) node.next = que[0];
            node.left && que.push(node.left);
            node.right && que.push(node.right);
        }
    }
    return root;
};

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node7 = new Node(7);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = null;
node3.right = node7;

console.log(connect(root));