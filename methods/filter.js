//DEFINITION: 
  // ** CREATES A NEW ARRAY
  // iterates through an array
  // runs a callback function on each value in the array
  //if the callback function returns true, that value will be added to the new array
  //if the callback function  returns false, that value will be irgnored from the new array
      //new array can be assigned to a variable or used in continued/chained functionality
  //takes three possible arguments (item, index, array)
  //filter ALWAYS RETURNS A BOOLEAN

//** for this element, determine whether or not it satsifies these conditions**/

const lessThanFiveLetters = arr => {
  return arr.filter(item => {
    return item.length > 5 ;
  });
}

const filterByValue = (arr,key) => {
  return arr.filter(function(item){
      return item[key] !== undefined;
  });
}

function find(arr, searchValue){
  return arr.filter(function(item){
      return item === searchValue
  })[0];
}

function findInObj(arr, key, searchValue){
  return arr.filter(function(item){
      return item[key] === searchValue;
  })[0];
}

function removeVowels(str){
  var vowels = "aeiou"
  return str.toLowerCase().split("").filter(function(item){
      return vowels.indexOf(item) === -1;
  }).join('')
}

function doubleOddNumbers(arr){
  return arr.filter(function(item){
      return item % 2 !== 0;
  }).map(function(val){
      return val *2;
  })
}

//only return values unqiuely, and only those values that occur dupes
return array.filter((element, index) => array.indexOf(element) !== index)

//only return values uniquely, i.e., DEDUPE
return array.filter((element, index) => array.indexOf(element) === index)


// const intersection = (arrays) = {
//   return arrays.reduce((acc, next) => { 
//     return acc.filter(element => next.includes(element))
//   })
// }

  
