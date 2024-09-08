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
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 递归-中序遍历 + 在树上求众数
var findMode = function(root) {
    let res = [];
    let count = 0;
    let maxCount = 1;
    let pre = root;
    const travelTree = function(cur) {
        if(cur === null) return;
        
        travelTree(cur.left);
        
        // 在树上如何求众数:使用pre指针和cur指针的技巧
        if(pre === null) {
            count = 1;
        }else if(pre.val === cur.val) {
            count++;
        }else {
            count = 1;
        }
        pre = cur;
        // 最大众数是一个集合,怎么遍历一次数组就获取最大众数?
        if(count === maxCount) {
            res.push(cur.val);
        }
        
        if(count > maxCount) {
            res = [];
            res.push(cur.val);
            maxCount = count;
        }

        travelTree(cur.right);
    }

    travelTree(root);
    return res;
};

const root = new TreeNode(1);
const node2 = new TreeNode(1);
root.left = node2;
// const node3 = new TreeNode(2);
// root.right = node2;
// node2.left = node3;

console.log(findMode(root));