//DEFINITION
  // iterates through an array
  // runs callback on each value in the array
      // takes three possible arguments: (item, index, array)
  // DOES NOT RETURN necessarily
      //will evaluate to undefined if not returned
  // WILL MUTATE ON OG ARRAY IF FUNCTIONALITY IS RETURNED

//Basic look
let arr = [1, 2, 3, 4, 5];

arr.forEach((num, index) => {
  return arr[index] = num * 2;
});
//--> RETURNS arr = [2, 4, 6, 8, 10]


//double value
doubleVals = (arr) => {
  let newArr = []
  arr.forEach(num => {
    newArr.push(num *2)
  })
  return newArr;
}

//return evens
onlyEvans = (arr) => {
  let newArr = [];
  arr.forEach(num => {
    (num % 2 === 0){
      newArr.push(num)
    }
  })
  return newArr
}

//first and last char of each string in array
showFirstAndLast = (arr) => {
  var newArr = [];
  arr.forEach(str => {
      newArr.push(str[0] + str[str.length-1])
  });
  return newArr;
}

//times a number by ten if the number in the array is greater than 4

array.forEach((num, i, arr) => {
 return arr[i] = num < 5 ? num : num * 10
})
