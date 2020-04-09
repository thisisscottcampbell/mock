//creates a new array
//iterates through an array
//runs a callback function for each item in array
//pushes the result of that callback to the new array
//returns the new array — which is always of the same length as the original

function doubleValues(arr){
  return arr.map(function(val){
      return val * 2
  });
}

function valTimesIndex(arr){
  return arr.map(function(val,idx){
      return val*idx;
  })
}

/*extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr,key){
  return arr.map(function(val){
      return val[key];
  });
}