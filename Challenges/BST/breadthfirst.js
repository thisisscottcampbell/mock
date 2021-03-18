const bfs = (root, callback) => {
  let queue = [];
  let cur;
  queue.push(root);
  while (queue.length) {
    cur = queue.shift();
    callback(cur.value);
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
};

const bfs = (root, callback) => {
  const queue = [];
  queue.push(root);
​
  while (queue.length) {
    const curr = queue.shift();
    callback(curr.value);
​
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
};