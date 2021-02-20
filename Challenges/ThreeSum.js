const threeSum = (nums) => {
    const output = [];
    
    for (let i = 0; i < nums.length; i++) {
      const first = nums[0];
      for (let j = i + 1; j < nums.length; j++) {
        const second = nums[j];
        for (let k = i + 2; k < nums.length; k++) {
          const third = nums[k]
                
          if (first + second + third === 0) {
            const triple = [first, second, third];
            console.log('triple', triple);
                    
            if (output.length === 0) output.push(triple)
  
                    
            else {
              let dupe = 0;
  
                for (let i = 0; i < output.length; i++) {
                  const currArr = output[i];
  
                  //console.log('curr', currArr);
  
                  for (let j = 0; j < triple.length; j++) {
  
                    const tripNum = triple[j];
                          
                    if (currArr.includes(tripNum) === true) {
                      dupe += 1;   
                    }
                    
                    if (dupe < triple.length) output.push(triple);
                }
              }
            }      
          }
        }
      }
    }
    //return output;
  };
  
  console.log(threeSum([-1,0,1,2,-1,-4]))