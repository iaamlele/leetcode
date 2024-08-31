/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
function Node(val, children) {
    this.val = (val === undefined ? 0 : val);
    this.children = (children === undefined ? [] : children);
}

var levelOrder = function(root) {
    const result = [];
    if(!root) return result;
    const que = [root];

    while(que.length) {
        let length = que.length;
        const curLevel = [];
        for(let i = 0; i < length; i++) {
            const node = que.shift();
            curLevel.push(node.val);

            // const chiled_len = node.children.length;
            // if(chiled_len) {
            //     for(let j = 0; j < chiled_len; j++) {
            //         que.push(node.children[j]);
            //     }
            // }
            
            // 改进
            for(let item of node.children) {
                item && que.push(item);
            }
        }
        result.push(curLevel);
    }
    return result;    
};

const node6 = new Node(6);
const node5 = new Node(5);
const node4 = new Node(4);
const node3 = new Node(3, [node5, node6]);
const node2 = new Node(2);
const root = new Node(1, [node3, node2, node4]);
console.log(levelOrder(root));