const bstMinMax = (root) => {
	//find right most helper
	const findRight = (node) => (node.right ? findRight(node.right) : node.value);
	//find left most helper
	const findLeft = (node) => (node.left ? findLeft(node.left) : node.value);

	//find right most
	const rightValue = findRight(root);
	//find left most
	const leftValue = findLeft(root);

	//return diff
	return rightValue - leftValue;
};

// Ex:

//      4
//    /   \
//   2     7
//  / \     \
// 1   3     9
//          /
//         8

// returns 8, becuase 9 - 1 = 8
