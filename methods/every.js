//iterates through an array
//runs a callback on each value in the array
//if the callback returns false for any single value, the entire return false



allLowerCase = (str) => {
  return str.split('').every(letter => {
    return letter === letter.toLowerCase();
  })
}

hasNoDuplicates = (arr) => {
  return arr.every(item => {
    return arr.indexOf(item) === arr.lastIndexOf(item)
  })
}

hasCertainKey = (arr, key) => {
  return arr.every(item => {
    return key in item
  })
}

hasCertainValue = (arr, key, searchValue) => {
  return arr.every(item => {
    return item[key] === searchValue;
  })
}