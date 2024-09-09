/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// 方法一: 递归法
// 注意题目提示:所有 Node.val 互不相同 ; 树中节点数目最少为2
var lowestCommonAncestor = function(root, p, q) {
    
    const recursion = function(root, p, q) {
        if(root === p || root === q || root === null) return root;
        // 有返回值,但是也要遍历所有的边, 要看如何处理返回值
        // 如果递归有返回值, 如何区分要搜索一条边, 还是搜索一棵树呢

        // 搜索一条边:
        // if(recursion(root.left)) return;
        // if(recursion(root.right)) return;

        // 搜索一棵树:
        // left = recursion(root.left);
        // right = recursion(root.right);
        // left与right的逻辑处理

        // 总结:在递归函数有返回值的情况下：如果要搜索一条边，递归函数返回值不为空的时候，立刻返回，如果搜索整个树，直接用一个变量left、right接住返回值，这个left、right后序还有逻辑处理的需要，也就是后序遍历中处理中间节点的逻辑（也是回溯）。
        // 找到结果后依然要遍历整棵树,why?因为在如下代码的后序遍历中，如果想利用left和right做逻辑处理， 不能立刻返回，而是要等left与right逻辑处理完之后才能返回。

        let left = recursion(root.left, p, q);
        let right = recursion(root.right, p, q);
        // 如果left 和 right都不为空，说明此时root就是最近公共节点。这个比较好理解
        // 如果left为空，right不为空，就返回right，说明目标节点是通过right返回的，反之依然。
        if(left !== null && right !== null) return root;

        if(left === null && right !== null) return right;
        else if(left !== null && right === null) return left;
        else if(left === null && right === null) return null;
    }

    return recursion(root, p, q);
};

const root = new TreeNode(3);
const node2 = new TreeNode(5);
const node3 = new TreeNode(1);
const node4 = new TreeNode(6);
const node5 = new TreeNode(2);
const node6 = new TreeNode(0);
const node7 = new TreeNode(8);
const node8 = new TreeNode(7);
const node9 = new TreeNode(4);
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;
node5.left = node8;
node5.right = node9;

const p = node2;
const q = node3;

console.log(lowestCommonAncestor(root, p, q));

