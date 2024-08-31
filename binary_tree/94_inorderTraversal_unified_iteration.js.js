/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var inorderTraversal = function(root) {
    const result = [];
    if(!root) return result;
    const stk = [root];

    let top = null;
    while(stk.length !== 0) {
        top = stk.at(-1);
        // console.log(stk, result, top);
        if(top !== null) {
            stk.pop();
            if(top.right) stk.push(top.right);
            stk.push(top);
            stk.push(null);
            if(top.left) stk.push(top.left);
        }else {
            stk.pop();
            result.push(stk.pop().val);
        }
        
    }
    return result;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.right = node2;
node2.left = node3;

console.log(inorderTraversal(root));