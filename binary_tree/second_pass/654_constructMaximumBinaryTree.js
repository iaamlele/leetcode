function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const findMaxValueIndex = function(arr) {
    let maxValueIndex = 0;
    for(let i = 1; i < arr.length; i++) {
        maxValueIndex = arr[i] > arr[maxValueIndex] ? i : maxValueIndex;
    }
    return maxValueIndex;
}

const constructMaximumBinaryTree = function(arr) {
    const recursion = function(arr) {
        if(!arr.length) return null;

        const maxValueIndex = findMaxValueIndex(arr);
        const node = new TreeNode(arr[maxValueIndex]);

        const leftTree = recursion(arr.slice(0, maxValueIndex));
        const rightTree = recursion(arr.slice(maxValueIndex + 1));
        node.left = leftTree;
        node.right = rightTree;

        return node;
    }
    return recursion(arr);
}

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));