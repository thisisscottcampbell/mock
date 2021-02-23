/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 *
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
	this.value = val;
	this.next = null;
}

const kthToLastNode = (k, listHead) => {
	if (!listHead || k === 0) return undefined;

	let currNode = listHead;

	let len = 1;

	while (currNode.next) {
		currNode = currNode.next;

		len += 1;
	}

	if (k > len) return undefined;

	let retNode = listHead;

	let i = 1;
	const returnAt = len - k + 1;

	while (i < len) {
		retNode = retNode.next;

		i += 1;

		if (i === returnAt) break;
	}

	return retNode.value;
};

console.log(kthToLastNode(2, a));
//'D'
