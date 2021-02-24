// * Write a function to delete the all instances of a node in a singly linked list.

function LinkedList() {
	this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
	this.val = val;
	this.next = null;
}

const linkedListRemoveMult = (ll, val) => {
	const curr = ll.head;
	const prev = null;
	const next = curr.next;

	const remove = (ll, curr, prev, next) => {
		//if val corresponds to val of first node
		if (ll.head.val === val) {
			curr.next = null;
			ll.head = next;

			if (!next.next) return ll;
			return remove(ll, next, prev || null, next.next);
		}

		//remove
		else if (curr.val === val) {
			curr.next = null;
			if (prev) prev.next = next;

			if (!next.next) return ll;
			return remove(ll, next, prev || null, next.next);
		}

		//we have traversed the list
		if (!next) return ll;

		//keep traversing
		return remove(ll, next, curr, next.next || null);
	};

	return remove(ll, curr, prev, next);
};

const List = new LinkedList();
const InitNode = new Node('a');

InitNode.next = new Node('d');
InitNode.next.next = new Node('b');
InitNode.next.next.next = new Node('b');
InitNode.next.next.next.next = new Node('c');

List.head = InitNode;

console.log(linkedListRemoveMult(List, 'b'));
//updated list
console.log(List.head.val);
//'a'
console.log(List.head.next.val);
//'d'
console.log(List.head.next.next.val);
//'c'
