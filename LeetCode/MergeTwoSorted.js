var mergeTwoLists = function (l1, l2) {
	let node = new ListNode();
	let list = node;

	while (l1 !== null && l2 !== null) {
		if (l1.val <= l2.val) (node.next = new ListNode(l1.val)), (l1 = l1.next);
		else (node.next = new ListNode(l2.val)), (l2 = l2.next);

		node = node.next;
	}

	if (l1 !== null) node.next = l1;
	if (l2 !== null) node.next = l2;

	return list.next;
};
