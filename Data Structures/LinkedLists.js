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
}

const myList = new LinkedList(10);
myList.append(5);
myList.prepend(7);
console.log(myList)