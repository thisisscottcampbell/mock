//remove lowest value AND preserve order AND if dupes, remove at lowest index.

function removeSmallest(numbers) {
  const highToLow = numbers.slice().sort((a,b) => a - b)
  const lowest = highToLow[0];
  const lowestIndex = numbers.indexOf(lowest)
  return numbers.filter((element, i) => i !== lowestIndex)

}