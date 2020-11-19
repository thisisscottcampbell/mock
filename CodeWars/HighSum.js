const maxSequence = arr => {
  
    if (arr.length === 0) return 0;
    if (arr.every(num => num < 0)) return 0;
     
    let highSum = 0;
  
    arr.reduce((acc, curr) => {
      const currSum = acc + curr;
  
      if (currSum < 0) {
        acc = 0;
        return acc;
      };
  
      if (currSum > highSum) highSum = currSum;
  
      return currSum;
    })
    
  return highSum;
}