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

const arr = ['cat', 'rabbit', 'dog', 'alligator', 'gorilla', 'fish', 'shark', 'rat', 'turtle']

const lessThanFiveLetters = arr => {
  return arr.filter(item => item.length < 5)
}

const lessThanFive = lessThanFiveLetters(arr)
console.log(lessThanFive)
//[ 'cat', 'dog', 'fish', 'rat' ]



const filterByValue = (arr,key) => {
  return arr.filter(item => item[key] !== undefined)
}

const find = (arr, searchValue) => {
  return arr.filter(item => {
      return item === searchValue
  })[0];
}

const findInObj = (arr, key, searchValue) => {
  return arr.filter(item => {
      return item[key] === searchValue;
  })[0];
}

const removeVowels = str => {
  const vowels = "aeiou"
  return str.toLowerCase().split("").filter(item => {
      return vowels.indexOf(item) === -1;
  }).join('')
}

const doubleOddNumbers = arr => {
  return arr.filter(item => {
      return item % 2 !== 0;
  }).map(val => {
      return val *2;
  })
}

//only dupes
return array.filter((element, index) => array.indexOf(element) !== index)

//only return values uniquely, i.e., DEDUPE
return array.filter((element, index) => array.indexOf(element) === index)
  
