//compare two arrays, return a new array containing only the elements of a that are not present in b
const arrayDiff = (a, b) => a.filter(element => !b.includes(element))