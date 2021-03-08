//head => [1,2,3,4,5]

//  function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//  }

const reverseList = (head) => {
	if (!head) return null;
	if (!head.next) return head;

	let revList = null;

	let currNode = head;

	while (currNode) {
		const nextNode = currNode.next;

		currNode.next = revList;
		revList = currNode;

		currNode = nextNode;
	}

	return revList;
};
