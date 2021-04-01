const lowestCommonAncestor = (root, p, q) => {
	//if both are less than
	if (p.value < root.value && q.value < root.value)
		return lowestCommonAncestor(root.left, p, q);

	//if both are greater than
	if (p.value > root.value && q.value > root.value)
		return lowestCommonAncestor(root.right, p, q);

	//in between, or root is parent, so return
	return root;
};

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
// given nodes "p" and "q" in the BST. Return the LCA node itself.

// Ex:

//      4
//    /   \
//   2     7
//  / \     \
// 1   3     9
//          /
//         8

// The LCA of node 1 and node 3 is node 2.
// The LCA of node 8 and node 9 is node 9.
// The LCA of node 2 and node 8 is node 4.

//
