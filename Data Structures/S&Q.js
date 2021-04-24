function Stack() {
	this.contents = [];
	this.length = 0;
}

Stack.prototype.push = function (value) {
	this.contents[this.length] = value;
	this.length++;
};

Stack.prototype.pop = function () {
	const res = this.contents.splice(this.length - 1)[0];
	this.length--;
	return res;
};

Stack.prototype.forEach = function (callback) {
	while (this.length > 0) {
		const temp = this.contents.pop();
		callback(temp);
		this.length--;
	}
};

function Queue() {
	this.QStack = new Stack();
	this.tempStack = new Stack();
}

Queue.prototype.enqueue = function (value) {
	if (!value) return;
	this.QStack.push(value);
};

Queue.prototype.dequeue = function () {
	if (this.QStack.length === 0) return;

	while (this.QStack.length > 0) {
		const res = this.QStack.pop();
		this.tempStack.push(res);
	}

	this.tempStack.pop();

	while (this.tempStack.length > 0) {
		const res = this.tempStack.pop();
		this.QStack.push(res);
	}
};

const stack = new Stack();
console.log(stack);
stack.push(3);
stack.push(2);
stack.push(69);
console.log(stack);
stack.pop();
console.log(stack);
stack.push(71);
stack.forEach(sqAndLog);
console.log(stack);

const queue = new Queue();
console.log(queue);
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');
console.log(queue);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
