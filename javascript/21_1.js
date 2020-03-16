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
var mergeTwoLists = function(l1, l2) {
	let dummyNode = new ListNode(0);
	let currentNode = dummyNode;
	while (true) {
		if (l1 === null) {
			currentNode.next = l2;
			break;
		}
		if (l2 === null) {
			currentNode.next = l1;
			break;
		}
		if (l1.val < l2.val) {
			currentNode.next = new ListNode(l1.val);
			l1 = l1.next;
		} else {
			currentNode.next = new ListNode(l2.val);
			l2 = l2.next;
		}
		currentNode = currentNode.next;
	}
	return dummyNode.next;
};
