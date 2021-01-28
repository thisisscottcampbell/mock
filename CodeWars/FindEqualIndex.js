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