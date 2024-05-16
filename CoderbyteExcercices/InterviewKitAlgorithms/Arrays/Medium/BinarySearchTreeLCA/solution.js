function BinarySearchTreeLCA(strArr) {
    const tree = JSON.parse(strArr[0]);
    const value1 = parseInt(strArr[1]);
    const value2 = parseInt(strArr[2]);

    // Define a TreeNode class to represent each node in the BST
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }

    // Function to build a BST from a preorder traversal array
    function buildBST(preorder) {
        if (preorder.length === 0) {
            return null;
        }
        const rootVal = preorder[0];
        const root = new TreeNode(rootVal);
        const leftPreorder = [];
        const rightPreorder = [];
        for (let i = 1; i < preorder.length; i++) {
            if (preorder[i] < rootVal) {
                leftPreorder.push(preorder[i]);
            } else {
                rightPreorder.push(preorder[i]);
            }
        }
        root.left = buildBST(leftPreorder);
        root.right = buildBST(rightPreorder);
        return root;
    }

    // Function to find the LCA of two nodes in a BST
    function findLCA(root, val1, val2) {
        if (root === null) {
            return null;
        }
        if (root.val > val1 && root.val > val2) {
            return findLCA(root.left, val1, val2);
        }
        if (root.val < val1 && root.val < val2) {
            return findLCA(root.right, val1, val2);
        }
        return root.val;
    }

    // Build the BST from the preorder traversal array
    const root = buildBST(tree);

    // Find the LCA of the two given values
    return findLCA(root, value1, value2).toString();
}

// keep this function call here 
console.log(BinarySearchTreeLCA(readline()));