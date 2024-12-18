function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 前序遍历先找到所有路径
const hasPathSum = function(root, targetsum) {
    const path = [];
    const recursion = function(node, list) {
        if(!node.left && !node.right) {
            path.push([...list]);
            return;
        }

        if(node.left) {
            list.push(node.left.val);
            recursion(node.left, list);
            list.pop();
        }

        if(node.right) {
            list.push(node.right.val);
            recursion(node.right, list);
            list.pop();
        }

        return;
    }
    if(!root) return false;
    recursion(root, list = [root.val]);
    const path_len = path.length;
    for(let i = 0; i < path_len; i++) {
        const list_len = path[i].length;
        let list_sum = 0;
        for(let j = 0; j < list_len; j++) {
            list_sum+=path[i][j];
        }
        if(list_sum === targetsum) return true;
    }
    return false;
}

const root = new TreeNode(5);
const node2 = new TreeNode(4);
const node3 = new TreeNode(8);
const node4 = new TreeNode(11);
const node5 = new TreeNode(13);
const node6 = new TreeNode(4);
const node7 = new TreeNode(7);
const node8 = new TreeNode(2);
const node9 = new TreeNode(1);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = null;
node3.left = node5;
node3.right = node6;
node4.left = node7;
node4.right = node8;
node6.right = node9;

console.log(hasPathSum(root, 22));