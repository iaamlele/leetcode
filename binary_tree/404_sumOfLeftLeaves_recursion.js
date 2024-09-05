/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 左叶子是一个既位于父节点的左边又没有子节点的节点
function recursion(node, res) {
    console.log(node);
    if(node === null) return res;
    else if(node !== null && node.left === null && node.right === null) {
        console.log("okk");
        return res+=(node.val);
        
    }
    console.log("OK",res);
    if(node.left !== null) res = recursion(node.left, res);
    if(node.right !== null) res = recursion(node.right.left, res);
    console.log(res);
    // 如何正确返回res
    return res;
}

// 递归法-中序遍历遍历
var sumOfLeftLeaves = function(root) {
    if(!root) return root;
    return recursion(root, res = 0);
};

const root = new TreeNode(1);
// const node2 = new TreeNode(9);
// const node3 = new TreeNode(20);
// const node4 = new TreeNode(15);
// const node5 = new TreeNode(7);
// root.left = node2;
// root.right = node3;
// node3.left = node4;
// node3.right = node5;

console.log(sumOfLeftLeaves(root));