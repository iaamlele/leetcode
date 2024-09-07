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
 * @param {number} targetSum
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 这个题迭代方法不好写,要记录每条路径很麻烦
// 递归方法-要遍历整个树,找到所有路径,所以递归函数不要返回值!
var pathSum = function (root, targetsum) {
    const result = [];
    if(!root) return result;    
    const path = [root.val];

    const findPath = function(node, count, path) {
        if(node.left === null && node.right === null && count === 0) {
            result.push([...path]);// 不能直接写result.push(path); 要深拷贝!
            return;
        }

        if(!node.left && !node.right) return;

        if(node.left) {
            path.push(node.left.val);
            count -= node.left.val;
            findPath(node.left, count, path);
            count += node.left.val;
            path.pop();
        }

        if(node.right) {
            path.push(node.right.val);
            count -= node.right.val;
            findPath(node.right, count, path);
            count += node.right.val;
            path.pop();
        }

        return;        
    }

    findPath(root, targetsum - root.val, path);
    return result;
}

const root = new TreeNode(5);
const node2 = new TreeNode(4);
const node3 = new TreeNode(8);
const node4 = new TreeNode(11);
const node5 = new TreeNode(13);
const node6 = new TreeNode(4);
const node7 = new TreeNode(7);
const node8 = new TreeNode(2);
const node9 = new TreeNode(5);
const node10 = new TreeNode(1);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = null;
node3.left = node5;
node3.right = node6;
node4.left = node7;
node4.right = node8;
node6.left = node9;
node6.right = node10;

console.log(pathSum(root, 22));