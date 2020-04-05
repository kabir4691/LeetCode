/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) return [];
  const resultArr = [];
  const queue = [root];
  let subArr, currNode, queueLength;
  while(queue.length > 0) {
      subArr = [];
      queueLength = queue.length;
      for (let i = 0; i < queueLength; i++) {
          currNode = queue.shift();
          subArr.push(currNode.val);
          if (currNode.left !== null) queue.push(currNode.left);
          if (currNode.right !== null) queue.push(currNode.right);
      }
      resultArr.unshift(subArr);
  }
  return resultArr;
}; 