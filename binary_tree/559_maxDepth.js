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

// 递归法-后序遍历
function recurtion(node) {
    if(!node) return 0;

    let count = [];
    for(let i = 0; i < node.children.length; i++) {
        count.push(recurtion(node.children[i]));
    }
    // Math.max(...count) 处理空数组会返回-Infinity
    return (count.length === 0 ? 1 : Math.max(...count) + 1);
}

var maxDepth = function(root) {
    if(!root) return root;
    return recurtion(root);
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