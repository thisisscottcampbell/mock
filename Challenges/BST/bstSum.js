const bstSum = root => {
  
    //if there is no root node, return;
    if (!root) return;
  
    //init counter
    let sum = 0;
   
    //define recursive function to process node values
    const handleSum = node => {
  
      //Break Case: no node.
      if (!node) return;
  
      //incremenet sum with every node;
      sum += node.value
  
      //process each node with less than value
      handleSum(node.left);
      //process each node with greater than value
      handleSum(node.right); 
    }
    
    //invoke recursive function
    handleSum(root);
    //return sum
    return sum;
  };