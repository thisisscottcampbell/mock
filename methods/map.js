//DEFINITION:
  // ** CREATES A NEW ARRAY ** 
  //iterates through an array
  //runs a callback function for each item in array
  //pushes the result of that callback to the new array
  //returns the new array — which is always of the same length as the original
      //new array can be assigned to a variable or used in continued/chained functionality

// --- MAP: under the hood ---
const map = (array, someFunctionality) => {
  const output = [];

  for (let i = 0; i < array.length; i++){
    let element = array[i]
    output.push(someFunctionality(element));
  }

  return output;
}

const mapArray = [1,2,3]
const multiplyBy2 = (input) => input * 2;
const result = map(mapArray, multiplyBy2)
// --- returns: [2,4,6]
 //LINE 10: declaring map, passing it an array and a callback 
 //LINE 11: declaring our array that we will return
          //as map returns an array
//LINE 2: initiating our loop through the passed in array, 
          //as map iterates through an array
//LINE 13: capturning each element that we will execute the     functionality on
//LINE 14: executing the functionality on the current element as prescribed by the callback
//LINE 16: returning our new array where each element has been modified according to the instructions of the callback

//LINES 10-12, invoking map()


//create a function that returns an array with all values in input array doubled
const doubleValues = arr => arr.map(el => el * 2)


const elementTimesIndex = arr => {
  return arr.map((el,i) => {
      return el * i;
  })
}

/*extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr,key){
  return arr.map(function(item){
      return item[key];
  });
}

function extractFullName(arr){
  return arr.map(function(item){
    return item.first + " " + item.last;
  });
}