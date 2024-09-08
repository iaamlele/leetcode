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
    this.right = (right = undefined ? null : right);
}

// 方法二:转换成有序数组,再比较数组中最小差值
var getMinimumDifference = function(root) {
    const push_into_arr = function(root) {
        if(!root) return;
        push_into_arr(root.left);// 左
        arr.push(root.val); // 中
        push_into_arr(root.right); // 右
    }
    const arr = [];
    push_into_arr(root);
    let result = Infinity;
    for(let i = 0; i < arr.length - 1; i ++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] - arr[i] < result) result = arr[j] - arr[i];
        }
    }
    return result;
};

const root = new TreeNode(4);
const node2 = new TreeNode(2);
const node3 = new TreeNode(6);
const node4 = new TreeNode(1);
const node5 = new TreeNode(3);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

console.log(getMinimumDifference(root));
