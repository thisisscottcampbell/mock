class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function removeDuplicatesFromLinkedList(linkedList) {
	// Write your code here.

	const cache = {};

	let node = linkedList;

	while (node.next) {
		const next = node.next ? node.next : null;

		if (node.value === next.value || cache[node.value])
			node.next = next.next ? next.next : null;
		else {
			cache[node.value] = node.value;
			node = node.next;
		}
	}
	return linkedList;
}
