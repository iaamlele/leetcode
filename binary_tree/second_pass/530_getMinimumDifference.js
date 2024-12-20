function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 中序遍历先取出有序数组
const getMinimumDifference = function(root) {
    let list = [];
    const recursion = function(root) {
        if(!root) return;

        if(root.left) recursion(root.left);
        list.push(root.val);
        if(root.right) recursion(root.right);
    }
    recursion(root);
    let min = Infinity;
    for(let i = 0; i < list.length - 1; i++) {
        const min_value = list[i + 1] - list [i];
        min = min > min_value ? min_value : min;
    }
    console.log(list);
    return min;
}

// const root = new TreeNode(4);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(6);
// root.left = node2;
// root.right = node3;
// const node4 = new TreeNode(1);
// const node5 = new TreeNode(3);
// node2.left = node4;
// node2.right = node5;

// const root = new TreeNode(1);
// const node2 = new TreeNode(3);
// const node3 = new TreeNode(2);
// root.right = node2;
// node2.left = node3;

const root = new TreeNode(1);
const node2 = new TreeNode(0);
const node3 = new TreeNode(48);
root.left = node2;
root.right = node3;
const node4 = new TreeNode(12);
const node5 = new TreeNode(49);
node3.left = node4;
node3.right = node5;

console.log(getMinimumDifference(root));
