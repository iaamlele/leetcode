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
path = [1, 23, 4, 5, {1: 2}];
const result = [];
const result2 = [];
result.push(path);
result2.push([...path]);
console.log(result, result2);
path[4][1] = 10;
console.log(result2);
// result.push([...path]);// 不能直接写result.push(path); 要深拷贝!

// result.push(path); 和 result.push([...path]);的区别
// result.push(path);只是把path的引用添加进来,随着path的改变,result中push的内容也会改变; result.push([...path]);使用扩展运算符,会对数组进行浅拷贝
// result.push([...path]);仍然是浅拷贝,假如path = [1, 23, 4, 5, {1: 2}];答应出来结果是[ [ 1, 23, 4, 5, { '1': 2 } ] ],但是对象仍然是引用