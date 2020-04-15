//FILTER
const combineArraysAndDedupe = (arrays) => {
  let flatArray = arrays.flat(Infinity);
  return flatArray.filter((element, index) => flatArray.indexOf(element) === index)
}

//REDUCE
const combineArraysAndDedupe = (arrays) => {
  let flatArray = arrays.flat(Infinity);
  return flatArray.reduce((accArray, item) => {
  return accArray.includes(item) ? accArray : [...accArray, item]
},[]) 
}