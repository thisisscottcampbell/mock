const bstMinMax = (root) => {
  return bstMax(root) - bstMin(root);
};
const bstMin = (root) => {
  return root.left ? bstMin(root.left) : root.value;
};
const bstMax = (root) => {
  return root.right ? bstMax(root.right) : root.value;
};


const bstMinMax = (root) => {
  const findMax = (root) => {
    return root.right ? findMax(root.right) : root.value;
  };
​
  const findMin = (root) => {
    return root.left ? findMin(root.left) : root.value;
  };
​
  return findMax(root) - findMin(root);
};