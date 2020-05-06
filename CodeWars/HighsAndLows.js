//you are given a string of space separated numbers, and have to return the highest and lowest number as string seperated by space.

highAndLow = (numbers) => {
  let stringyNumsArray = numbers.split(' ')
  let numsArray = stringyNumsArray.map(element => Number(element))
  let sorted = numsArry.sort((a,b) => b - a )
  let solution = `${sorted[0]} ${sorted[sorted.length-1]}`
  return solution
}

//highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")