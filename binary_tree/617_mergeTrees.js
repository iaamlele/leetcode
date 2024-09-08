/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 递归法-前序遍历
var mergeTrees = function(root1, root2) {
    const recursion = function(root1, root2) {
        if(root1 === null && root2 === null) return null;

        if(!root1) return root2;
        if(!root2) return root1;

        var node = new TreeNode(root1.val + root2.val);
        
        node.left = recursion(root1.left, root2.left);
        node.right = recursion(root1.right, root2.right);

        return node;
    }

    if(!root1 && !root2) return null;
    return recursion(root1, root2);
};

const root1 = new TreeNode(1);
const node2 = new TreeNode(3);
const node3 = new TreeNode(2);
const node4 = new TreeNode(5);
root1.left = node2;
root1.right = node3;
node2.left = node4;

const root2 = new TreeNode(2);
const node22 = new TreeNode(1);
const node33 = new TreeNode(3);
const node44 = new TreeNode(4);
const node55 = new TreeNode(7);
root2.left = node22;
root2.right = node33;
node22.right = node44;
node33.right = node55;

console.log(mergeTrees(root1, root2));