//Creates a new array
// iterates through an array
// runs a callback function on each value in the array
//if the callback function returns true, that value will be added to the new array
//if the callback function  returns false, that value will be irgnored from the new array
//like map, (item, index, array)
//filter ALWAYS RETURNS A BOOLEAN

function lessThanFiveLetters(arr){
  return arr.filter(item => {
    return item.length > 5 ;
  });
}

function filterByValue(arr,key){
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