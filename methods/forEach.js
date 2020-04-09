// iterates through an array
// runs callback on each value in the array
// three possible: (item, index, array)
// returns undefined


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
 return arr[i] = num < 5 ? num : num = num * 10
})
