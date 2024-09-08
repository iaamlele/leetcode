// 非二叉搜索树的解法: 递归法-前序遍历 + map找众数
// 具体什么遍历方法都可以,主要是所有遍历一遍,然后使用map统计

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var findMode = function(root) {
    // 使用map要new!!
    const map = new Map();

    const recursion = function(root) {
        if(!root) return; 
        if(map.has(root.val)) {
            // map中修改value的方式: map.set(root.val, map.get(root.val) + 1);
            map.set(root.val, map.get(root.val) + 1);
        } else {
            map.set(root.val, 1);
        }
        // 上面可以优化成这样:
        // map.set(root.val, map.hash(root.val) ? map.get(root.val) + 1 : 1);
        recursion(root.left);
        recursion(root.right);
    }
    recursion(root);

    let maxCount = map.get(root.val);
    let res = [];
    // 获取map中item的方式是for(let [key, value] of map)
    for(let [key, value] of map) {
        if(value === maxCount) {
            res.push(key);
        }
        if(value > maxCount) {
            res = [];
            maxCount = value;
            res.push(key);
        }
    }
    return res;
};

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(2);
root.right = node2;
node2.left = node3;

console.log(findMode(root));