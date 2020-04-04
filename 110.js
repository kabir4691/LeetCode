/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return isHeightBalanced(root, new Height(0));
};

class Height {
  constructor(value) {
      this.value = value;
  }
}

const isHeightBalanced = (root, height) => {
  if (root === null) {
      height.value = 0;
      return true;
  }
  
  let leftHeight = new Height(0), rightHeight = new Height(0);
  let isLeftBalanced = isHeightBalanced(root.left, leftHeight);
  let isRightBalanced = isHeightBalanced(root.right, rightHeight);
  
  height.value = Math.max(leftHeight.value, rightHeight.value) + 1;
  
  if (Math.abs(leftHeight.value - rightHeight.value) >= 2) return false;
  
  return isLeftBalanced && isRightBalanced;
}