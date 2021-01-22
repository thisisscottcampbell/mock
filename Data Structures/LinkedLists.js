// class Node {
//     constructor(nodeValue) {
//         this.value = nodeValue.value,
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(val) {
//         this.head = {
//             value: val,
//             next: null
//         }
//         this.tail =  this.head;
//         this.length = 1;   
//     }
//     append(appendVal) {
//         const newNode = new Node(appendVal);

//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length += 1;
//         return this
//     }
//     prepend(prependVal) {
//         const newNode = new Node(prependVal);

//         newNode.next = this.head;
//         this.head = newNode;
//         this.length += 1;
//         return this
//     }
//     printList() {
//         const valsArray = [];
//         let curr = this.head;
//         while (curr !== null) {
//             valsArray.push(curr.value)
//             curr = curr.next
//         }
//         return valsArray
//     } 
//     insert(insertValue, i) {
//         if (i  <  0) return this;
//         if (i > this.length) return this.append(insertValue);

//         const newNode = new Node(insertValue);

//         const preInsertNode = this.traverseToIndex(i - 1);
//         const insertNodeNext = preInsertNode.next;
//         preInsertNode.next = newNode;
//         newNode.next = insertNodeNext;
//         this.length +=  1;
//         return this;
//     }
//     remove(i)  {
//         const preRemoveNode = this.traverseToIndex(i - 1);
//         const removeNode  = preRemoveNode.next;
//         const preRemoveNodeNewNext = removeNode.next;
//         preRemoveNode.next = preRemoveNodeNewNext;
//         this.length -= 1;
//         return this;
//     }
//     traverseToIndex (i) {
//         let counter = 0;

//         let currNode = this.head;
//         while (counter < i) {
//             currNode = currNode.next;
//             counter += 1;
//         }
//         return currNode;
//     }
// } 

// const myList = new LinkedList(10);

// myList.append(5);
// console.log('append 5', myList.printList());
// myList.prepend(7);
// console.log('prepend 7', myList.printList());
// myList.insert(99, 99);
// console.log('insert 99 at 99', myList.printList());
// myList.insert(12, 2)
// console.log('insert 12 at 2', myList.printList());
// myList.remove(3);
// console.log('remove node at index 3', myList.printList());

class LinkedList {
    constructor() {
        this.head = null,
        this.tail = null
    }

    append(value) {
        //if there is no List"
        if (!this.tail) this.head = this.tail = new Node(value)
        
        else {
            const newTail = new Node(value)
            const prevTail = this.tail;

            this.tail = newTail;
            prevTail.next = newTail;
            newTail.previous = prevTail;
        }
    }

    prepend(value) {
        //if the list is empty
        if(!this.head) this.head = this.tail = new Node(value);

        else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.previous = this.head;
            this.head.next = oldHead;
        }
    }

    deleteHead() {
        if (!this.head) return null;

        let removeHead = this.head;
        if (this.head === this.tail) this.head = this.tail = null;
        else {
            this.head = this.head.next;
            this.head.previous = null
        }
        return removeHead.value;
    }

    deleteTail() {
        if (!this.tail) return null

        let removeTail = this.tail;
        if (this.head === this.tail) this.head = this.tail = null;

        else {
            this.tail = removeTail.previous;
            this.tail.next = null;
        }
        return removeTail.value;
    }

    search(val) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === val) return currentNode;

            currentNode = currentNode.next
        }
        return null;
    }
}   

//NODE CLASS
class Node {
    constructor(value, previous, next) {
        this.value = value,
        this.previous = previous || null,
        this.next = next || null
    }
}


let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list);