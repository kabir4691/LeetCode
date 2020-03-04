/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(0);
    let node1 = l1, node2 = l2, currentNode = dummyNode;
    let val1, val2, sum, carry = 0, rem;
    while (node1 !== null || node2 !== null) {
        val1 = node1 === null ? 0 : node1.val;
        val2 = node2 === null ? 0 : node2.val;
        sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        rem = sum % 10;
        currentNode.next = new ListNode(rem);
        if (node1 !== null) node1 = node1.next;
        if (node2 !== null) node2 = node2.next;
        currentNode = currentNode.next;
    }
    if (carry > 0) {
        currentNode.next = new ListNode(carry);
    }
    return dummyNode.next;
};