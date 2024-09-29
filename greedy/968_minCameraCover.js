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

function TreeNode(val, left, right ) {
    this.val = (val === undefined ? 0: val);
    this.left = (left === undefined ? null: left);
    this.right = (right = undefined ? null: right);
}

// 局部最优: 让叶子节点的父节点安装所用摄像头最少 遍历顺序: 后序遍历->回溯 
// 如何存储摄像头: 3种状态, 0.无覆盖; 1.有摄像头; 2.有覆盖
var minCameraCover = function(root) {
    let res = 0;
    const traversal = function(node) {
        if(node === null) return 2;
        let left = traversal(node.left);
        let right = traversal(node.right);

        // 情况一:左右孩节点都有覆盖
        if(left === 2 && right == 2) return 0;
        // 情况二:左右节点至少有一个无覆盖
        if(left === 0 || right === 0) {
            res++;
            return 1;
        }
        // 情况三:左右节点至少有一个有摄像头
        if(left === 1 || right === 1) return 2;
        // 情况四:头节点没有覆盖

        return -1;
    }

    if(traversal(root) === 0) {
        res++;
    }
    return res;
};

const root = new TreeNode(0);
const node2 = new TreeNode(0);
root.left = node2;
const node3 = new TreeNode(0);
node2.left = node3;
const node4 = new TreeNode(0);
node3.left = node4;
const node5 = new TreeNode(0);
node4.right = node5;

console.log(minCameraCover(root));