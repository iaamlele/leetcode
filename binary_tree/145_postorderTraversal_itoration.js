/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 先序遍历-中左右, 调整左右-中右左, 倒序输出-左右中
var postorderTraversal = function(root) {
    const result = [];
    if(!root) return result;
    const stk = [root];
    
    // Array.prototype.reverse(): 就地反转数组中的元素，并返回同一数组的引用
    let cur = null;
    while(stk.length) {
        cur = stk.pop();
        result.push(cur.val);
        if(cur.left) stk.push(cur.left); // 这里的逻辑要思考清楚,和前序遍历的区别
        if(cur.right) stk.push(cur.right);   
    }

    return result.reverse();
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

console.log(postorderTraversal(root));