function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const findMode = function(root) {
    const list = [];
    const recursion = function(node) {
        if(!node) return;

        recursion(node.left);
        list.push(node.val);
        recursion(node.right);
    }
    recursion(root);
    const hashTable = {};
    for(let i = 0; i < list.length; i++) {
        if(hashTable[list[i]]) {
            hashTable[list[i]]++;
        }else {
            hashTable[list[i]] = 1;
        }
    }

    // obj中如何获取最大value的key值，且保留多个最大值的key
    let maxCount = hashTable[root.val];
    let res = [];
    for(let key in hashTable) {
        if(hashTable[key] === maxCount) {
            res.push(parseInt(key));
        }
        if(hashTable[key] > maxCount) {
            res = [];
            maxCount = hashTable[key];
            res.push(parseInt(key));
        }
    }

    return res;
}

// const root = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(2);
// root.right = node2;
// node2.left = node3;

const root = new TreeNode(0);

console.log(findMode(root));