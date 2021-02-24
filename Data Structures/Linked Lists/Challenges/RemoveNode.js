function LinkedList() {
	this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
	this.val = val;
	this.next = null;
}

const linkedListRemove = (ll, val) => {
	const curr = ll.head;
	const prev = null;
	const next = curr.next;

	const remove = (curr, prev, next) => {
		if (curr.val === val) {
			curr.next = null;
			prev.next = next;
			return curr;
		}

		return remove(next, curr, next.next);
	};

	if (curr.val === val) {
		ll.head = next;
		return curr;
	}

	return remove(curr, prev, next);
};

// const List = new LinkedList();
// const InitNode = new Node('a');

// InitNode.next = new Node('d');
// InitNode.next.next = new Node('b');
// InitNode.next.next.next = new Node('c');
// InitNode.next.next.next.next = new Node('b');

// List.head = InitNode;

// console.log(linkedListRemove(List, 'a'));
// console.log(List);
// //updated list
// console.log(List.head.val);
// //'d'
// console.log(List.head.next.val);
// //'b'
// console.log(List.head.next.next.val);
// //'c'
