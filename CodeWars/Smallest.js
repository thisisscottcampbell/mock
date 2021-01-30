const num = 1324541567845664;

const smallest = (num) => {
    const strNum = num.toString().split('');
    const numArr = strNum.map(num => Number(num))
    const lowNum = (Math.min(...strNum));
  
    const idx = numArr.indexOf(lowNum);
    const reposition = numArr.splice(1, idx);
    console.log(reposition);
    numArr.unshift(reposition);
    const shrunk = numArr.join('')

    console.log(typeof shrunk === 'number')

    const jdx = numArr.indexOf(lowNum);

return [shrunk, idx, jdx]
}

console.log(smallest(num))