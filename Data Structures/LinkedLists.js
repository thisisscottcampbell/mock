//Node Class
class Node {
    constructor(value, previous, next) {
        this.value = value,
        this.previous = previous || null,
        this.next = next || null
    }
}
//LinkedList Class
class LinkedList {
    constructor() {
        this.head = null,
        this.tail = null,
        this.length = 0
    }

    //push node
    append(value) {
        //sanity
        if (!this.tail) {
            this.head = this.tail = new Node(value);
            this.length += 1;
        }
        
        else {
            const newTail = new Node(value)
            const prevTail = this.tail;

            this.tail = newTail;
            prevTail.next = newTail;
            newTail.previous = prevTail;

            this.length += 1;
        }
    }

    //pop node
    deleteTail() {
        if (!this.tail) return null

        const removeTail = this.tail;
        const newTail = removeTail.previous;

        if (this.head === this.tail) this.head = this.tail = null;

        else {
            this.tail = newTail;
            newTail.next = null;
        }
        
        this.length -= 1;
        return removeTail.value;
    }

    //shift node
    deleteHead() {
        if (!this.head) return null;

        const removeHead = this.head;
        const newHead = removeHead.next;

        if (this.head === this.tail) this.head = this.tail = null;
        else {
            this.head = newHead;
            newHead.previous = null
        }

        this.length -= 1;
        return removeHead.value;
    }

    //unshift node
    prepend(value) {
        //sanity
        if(!this.head) this.head = this.tail = new Node(value);

        else {
            const newHead = new Node(value);
            const prevHead = this.head;

            this.head = newHead;
            prevHead.previous = newHead;
            newHead.next = prevHead;
        }
        this.length += 1;
    }

    //find node by value
    findNode(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) return currentNode;

            currentNode = currentNode.next
        }
        return null;
    }

    //id node at list position
    traverseList(idx) {
        if (idx > this.length) return;
        let counter = 1;
        let targetNode = this.head;

        while (counter < idx) {
            targetNode = targetNode.next;
            counter += 1;
        }
        return targetNode;
    }
    
    //delete node at position
    removeNode(idx) {
        if (idx > this.legnth || idx < 1) return;
        if (idx === 1) return this.deleteHead();
        if (idx === this.length) return this.deleteTail();

        const deleteNode = this.traverseList(idx);
        const nextNode = deleteNode.next;
        const previousNode = deleteNode.previous;
        nextNode.previous = previousNode;
        previousNode.next = nextNode

        this.length -=1;

        return this;
    }

    //add new node at position
    insertNode(value, idx) {
        if (idx > this.legnth || idx < 1) return;
        if (idx === 1) return this.prepend(value);
        if (idx === this.length) return this.append(value);

        const targetNode = this.traverseList(idx)
        const newNode = new Node(value);
        const previousNode = targetNode.previous;

        newNode.previous = previousNode;
        newNode.next = targetNode;
        targetNode.previous = newNode;
        previousNode.next = targetNode;

        this.length += 1;

        return this;

    }
}   


const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
// list.prepend(69);
// list.deleteHead();
// list.deleteTail();
// const find2 = list.findNode(2);
// console.log(find2)
// list.append(6);
// list.append(7);
// list.append(8);
// list.removeNode(3)
// list.removeNode(3)
// list.insertNode('INSERT ME', 3)
console.log(list);