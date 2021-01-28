// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

const findEqualIndex = arr => {

    let idx = null
    
    arr.forEach((num, i) => {
      const preI =  arr.slice(0,i);
      const postI = arr.slice(i + 1);
      
      let leftEval;
      let rightEval;
      
      if (preI.length > 0) leftEval = preI.reduce((acc, curr) => acc += curr)
      else leftEval = 0;
      
      if (postI.length > 0) rightEval = postI.reduce((acc, curr) => acc += curr)
      else rightEval = 0;
      
      
      
      if (leftEval === rightEval) idx = i
  
    })
    return idx === null ? -1 : idx
  }