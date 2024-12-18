function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const buildTree = function(inorder, postorder) {
    const recursion = function(inorder, postorder) {
        if(postorder.length === 0) return null;
        const rootValue = postorder.pop();
        const root = new TreeNode(rootValue);

        let delimiterIndex = 0;
        for(delimiterIndex; delimiterIndex < inorder.length; delimiterIndex++) {
            if(inorder[delimiterIndex] === rootValue) break;
        }
        

        const inoder_left = inorder.slice(0, delimiterIndex);
        const inorder_right = inorder.slice(delimiterIndex + 1);

        const postorder_left = postorder.slice(0, delimiterIndex);
        const postorder_right = postorder.slice(delimiterIndex);

        root.left = buildTree(inoder_left, postorder_left);
        root.right = buildTree(inorder_right, postorder_right);

        return root;
    }

    if(inorder.length === 1 && inorder[0] === -1) return new TreeNode(-1);
    return recursion(inorder, postorder);
}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]));