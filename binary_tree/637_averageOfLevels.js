
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : left);
}

var averageOfLevels = function(root) {
    const result = [];
    if(!root) return result;
    const que = [root];

    while(que.length) {
        let length = que.length;
        let sum = 0;
        for(let i = 0; i < length; i++) {
            const node = que.shift();
            sum+=node.val;
            node.left && que.push(node.left);
            node.right && que.push(node.right);
        }
        result.push(sum / length);
    }
    return result;
};

const root = new TreeNode(3);
const node2 = new TreeNode(9);
const node3 = new TreeNode(20);
root.left = node2;
root.right = node3;
node2.left = null;
node2.right = null;
const node4 = new TreeNode(15);
const node5 = new TreeNode(7);
node3.left = node4;
node3.right = node5;

console.log(averageOfLevels(root));