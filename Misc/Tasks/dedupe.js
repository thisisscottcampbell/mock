//FILTER

  array.filter((element, index) => flatArray.indexOf(element) === index)

//REDUCE
  array.reduce((acc, item) => {
  acc.includes(item) ? acc : [...acc, item]
  return acc
},[]) 
