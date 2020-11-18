class LinkedList {
    constructor(val) {
        this.head = {
            value: val,
            next: null
        }
        this.tail =  this.head;
        this.length = 1;   
    }
    append(appendVal) {
        const newNode = {
            value: appendVal,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length += 1;
        return this
    }
    prepend(prependVal) {
        const newNode = {
            value: prependVal,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
        return this
    }
    printList() {
        const valsArray = [];
        let curr = this.head;
        while (curr !== null) {
            valsArray.push(curr.value)
            curr = curr.next
        }
        return valsArray
    } 
    insert(insertValue, i) {
        if (i  <  0) return this;
        if (i > this.length) return this.append(insertValue);

        const newNode = {
            value: insertValue,
            next: null
        }

        const preInsertNode = this.traverseToIndex(i - 1);
        const insertNodeNext = preInsertNode.next;
        preInsertNode.next = newNode;
        newNode.next = insertNodeNext;
        this.length +=  1;
        return this;
    }
    remove(i)  {
        const preRemoveNode = this.traverseToIndex(i - 1);
        const removeNode  = preRemoveNode.next;
        const preRemoveNodeNewNext = removeNode.next;
        preRemoveNode.next = preRemoveNodeNewNext;
        this.length -= 1;
        // return this;
    }
    traverseToIndex (i) {
        let counter = 0;

        let currNode = this.head;
        while (counter < i) {
            currNode = currNode.next;
            counter += 1;
        }
        return currNode;
    }
}

const myList = new LinkedList(10);

myList.append(5);
myList.prepend(7);
console.log(myList.printList());
myList.insert(99, 99);
console.log(myList.printList());
myList.insert(12, 2)
console.log(myList.printList());
console.log(myList)