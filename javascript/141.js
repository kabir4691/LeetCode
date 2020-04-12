/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) return false;
  let first = head, second = head.next;
  while(first !== second) {
      if (second === null || second.next === null) return false;
      first = first.next;
      second = second.next.next;
  }
  return true;
};