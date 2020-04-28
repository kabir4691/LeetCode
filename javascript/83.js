/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null) return head;
  let current = head;
  let next = head.next;
  while (next != null) {
      if (current.val === next.val) {
          current.next = next.next;
      } else {
          current = next;
      }
      next = current.next;
  }
  return head;
};