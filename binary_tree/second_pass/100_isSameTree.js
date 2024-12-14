function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const isSameTree = function(q, p) {
    const recursion = function(q, p) {
        if(q === null && p === null) return true;
        else if(q === null && p !== null) return false;
        else if(q !== null && p === null) return false;
        else if(q.val !== p.val) return false;

        const left = recursion(q.left, p.left);
        const right = recursion(q.right, p.right);
        if(left && right) return true;
        else return false;
    }

    return recursion(q, p);
}

// const root1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(3);
// root1.left = node2;
// root1.right = node3;

// const root2 = new TreeNode(1);
// const node22 = new TreeNode(2);
// const node33 = new TreeNode(3);
// root2.left = node22;
// root2.right = node33;

const root1 = new TreeNode(1);
const node2 = new TreeNode(2);
root1.left = node2;

const root2 = new TreeNode(1);
const node22 = new TreeNode(2);
root2.right = node22;

console.log(isSameTree(root1, root2));