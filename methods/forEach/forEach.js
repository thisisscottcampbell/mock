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
  reutn newArr
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

//first and last
showFirstandLast = (arr) => {
  let newArr = [];
  arr.forEach(num => {
    newArr.push(num[0] + num[num.length-1])
  })
  return newArr
}

