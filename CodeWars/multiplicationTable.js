// Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.

// const multiplicationTable = (row, col, i = 1, tables = []) => {
  
//     //Base Case
//     if (i > row) return tables;
  
//     const currTable = [];
//     const currTableLength = col;
//     const currFactor = i;
    
//     let currVal = 1;
    
//      //updates    
//     while (currVal <= currTableLength) {
      
//       const pushVal = currVal * currFactor;
      
//       currTable.push(pushVal);
//       currVal += 1;
//     }
    
//     const newTable = [...tables, currTable];
//     i += 1;
           
//     //RECURSIVE CASE
//     return multiplicationTable(row, col, i, newTable)
    
// }

// console.log(multiplicationTable(3,3))


const multiplicationTable = (size, table = [], i = 0) => {

  if (table.length === size) return table
  
  if (i === 0) {
    let num = 1;
    const innerTable = [];
    
    while (num <= size) {
      innerTable.push(num);
      
      num++
    }
    
    table.push(innerTable);
    return multiplicationTable(size, table, ++i, innerTable);
  }
  
  const prevTable = table[table.length -1];

  const newTable = prevTable.map((num, i) => num + i + 1);
    
  return multiplicationTable(size, [...table, newTable], ++i);

}

console.log(multiplicationTable(3,3))