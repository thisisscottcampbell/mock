class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function validateBst(bst) {
	//init sanity check
	if (!bst.right && !bst.left) return true;

	//recursive call
	const process = (node, leftVal = null, rightVal = null) => {
		//leftVal is RIGHT CHECK
		//rightVal is LEFT CHECK

		//BASE CASE: branch passed each check
		if (!node) return true;

		//Check current node for BST criteria: if fails, return false
		if (rightVal && node.value >= rightVal) return false;
		if (leftVal && node.value < leftVal) return false;

		//init processing left side
		const isLeft = process(node.left ? node.left : null, leftVal, node.value);

		//if left process failed, return false
		if (!isLeft) return false;

		//if left passes, return the result of process right side
		return (
			isLeft && process(node.right ? node.right : null, node.value, rightVal)
		);
	};

	//return output of recursive call
	return process(bst);
}
