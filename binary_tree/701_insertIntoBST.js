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
 * @param {number} val
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
// 方法一: 递归
var insertIntoBST = function(root, val) {
    const recursion = function(root, val) {
        // 不确定需不需要返回值??
        // 节点树从0开始->确定了终止条件
        if(root === null) {
            const new_node = new TreeNode(val);
            return new_node;
        }

        if(val > root.val) {
            if(root.right) recursion(root.right, val);
            else {
                const new_node = new TreeNode(val);
                root.right = new_node;
            }
        }else if(val < root.val) {
            if(root.left) recursion(root.left, val);
            else {
                const new_node = new TreeNode(val);
                root.left = new_node;
            }
        }

    }
    recursion(root, val);
    return root;
};

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(7);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(insertIntoBST(root, 5))