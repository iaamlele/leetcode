function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const binaryTreePaths = function(root) {
    const res = [];
    const recursion = function(node, list) {
        if(!node.left && !node.right) {
            res.push([...list]);
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
    recursion(root, [root.val]);
    const len = res.length;
    const res2 = [];
    for(let i = 0; i < len; i++) {
        const sub_len = res[i].length;
        let str = '';
        for(let j = 0; j < sub_len - 1; j++) {
            str = str + res[i][j] + '->';
        }
        str+= res[i][sub_len - 1];
        res2.push(str);
    }
    return res2;
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
root.left = node2;
root.right = node3;

const node4 = new TreeNode(5);
node2.left = node4;

console.log(binaryTreePaths(root));