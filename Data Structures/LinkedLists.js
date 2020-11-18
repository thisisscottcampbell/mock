class LinkedList {
    constructor(val) {
        this.head = {
            value: val,
            next: null
        }
        this.tail =  this.head;
        this.length = 1;

        return this;
    }

    // append(val) {
    //     const newNode
    // }
}

const node = new LinkedList(10);
console.log(node)