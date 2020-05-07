const myEvery = (array, callback) => {
  const trueReturns = array.reduce((acc, element) => {
    callback(element) && acc++
    return acc
  }, 0)
  return trueReturns === array.length ? true : false
}