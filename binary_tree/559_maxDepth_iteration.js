/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
function Node(val, children) {
    this.val = val;
    this.children = (children === undefined ? [] : children);
}

// 迭代法:层序遍历
var maxDepth = function(root) {
    let result = 0;
    if(!root) return result;
    const que = [root];

    while(que.length) {
        let length = que.length;
        for(let i = 0; i < length; i++) {
            const node = que.shift();
            let child_length = node.children.length;
            for(let j = 0; j < child_length; j++) {
                que.push(node.children[j]);
            }
        }
        result++;
    }

    return result;
};

const root = new Node(1);
const node2 = new Node(3);
const node3 = new Node(2);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
root.children = [node2, node3, node4];
node2.children = [node5, node6];

console.log(maxDepth(root));