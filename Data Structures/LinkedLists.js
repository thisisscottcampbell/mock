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
}

const node = new LinkedList(10);
node.append(5);
console.log(node)