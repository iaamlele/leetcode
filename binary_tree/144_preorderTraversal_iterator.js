
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 有图形思想,但是没有转换成计算机可表达的思想,写不出来
var preorderTraversal = function(root) {
    const result = [];
    if(!root) return result;
    const stk = [root];

    let cur = null;
    while(stk.length) {
        cur = stk.pop();
        result.push(cur.val);
        if(cur.right) stk.push(cur.right);
        if(cur.left) stk.push(cur.left);
    }
    return result;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

// 先序: 123
console.log(preorderTraversal(root));