// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}
​
// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}
​
const linkedListRemove = (ll, val) => {
  if (ll.head.val === val) {
    return ll.head.next;
  }
​
  let current = ll.head;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
      break;
    }
​
    current = current.next;
  };
​
  return ll;
};
​
/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.
​
Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:
​
 ('a' -> 'b' -> 'c')
​
*/
​
const linkedListRemoveMultiple = (ll, val) => {
  if (ll.head.val === val) {
    // if the head is to be deleted,
    // reassign head to the next node and call linkedListRemoveMultiple again
    // in case the next node is also to be deleted
    ll.head = ll.head.next;
    return linkedListRemoveMultiple(ll, val);
  }
​
  // otherwise nodes to be deleted could be the other nodes in the linked list
  let curNode = ll.head;
  let nextNode = curNode.next;
  while (nextNode) {
    // Determine whether the next node's value matches the input value
    if (nextNode.val === val) {
      // If so: Reassign the pointers to ignore the node matching the target value
      curNode.next = nextNode.next;
    } else {
      // If not: Iterate the two pointers by one node
      curNode = nextNode;
    }
​
    nextNode = nextNode.next;
  }
​
  return ll;
