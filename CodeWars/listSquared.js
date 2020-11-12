const listSquared = (m, n, twoples = []) => {

    const divisors = [];
    

    if (m === n) return twoples;


    for (let i = m; i > 0; i -= 1) {
      const divisor = i;
      if (m % divisor === 0) divisors.push(divisor);
    }

    const sqauredDivs = divisors.map(div => div ** 2);
  
    const sqSum = sqauredDivs.reduce((acc, next) => acc += next);
  

    if (Math.sqrt(sqSum) % 1 === 0) twoples.push([m, sqSum])
    
    return listSquared(m+=1, n, twoples)
}

console.log(listSquared(1, 250));
// (listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
// (listSquared(42, 250), [[42, 2500], [246, 84100]])
// (listSquared(250, 500), [[287, 84100]])