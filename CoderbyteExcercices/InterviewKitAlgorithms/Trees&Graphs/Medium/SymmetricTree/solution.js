function SymmetricTree(strArr) { 
  // Define a helper function to check if two subtrees are symmetric
  function isSymmetric(leftSubtree, rightSubtree) {
      // If both subtrees are null, they are symmetric
      if (!leftSubtree && !rightSubtree) {
          return true;
      }
      // If one subtree is null and the other is not, they are not symmetric
      if (!leftSubtree || !rightSubtree) {
          return false;
      }
      // If the values of the nodes are not equal, they are not symmetric
      if (leftSubtree.val !== rightSubtree.val) {
          return false;
      }
      // Recursively check if the left subtree's left child is symmetric to the right subtree's right child
      // and if the left subtree's right child is symmetric to the right subtree's left child
      return isSymmetric(leftSubtree.left, rightSubtree.right) && isSymmetric(leftSubtree.right, rightSubtree.left);
  }
  
  // Convert the string array to a binary tree
  function buildTree(index) {
      if (index >= strArr.length || strArr[index] === '#') {
          return null;
      }
      const node = { val: parseInt(strArr[index]), left: null, right: null };
      node.left = buildTree(2 * index + 1);
      node.right = buildTree(2 * index + 2);
      return node;
  }
  
  // Check if the root of the tree is symmetric
  const root = buildTree(0);
  if (!root) {
      return true; // Empty tree is symmetric
  }
  return isSymmetric(root.left, root.right);
}
 
// keep this function call here 
console.log(SymmetricTree(readline()));