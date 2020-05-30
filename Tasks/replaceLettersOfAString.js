const replaceLettersOfString = (word) => {
  let string = word
  for (let i = 0; i < word.length ; i -= 1) {
    if (i % 2 === 0) string = string.replace(word[i],'4')
  }
  return string
};

//OR


const replaceLettersOfString = (word) => {
  let string = word.split('')
    for (let i = word.length - 1; i >= 0; i-= 1) {
      if (i % 2 === 0) string.splice(i, 1, '4')
    }
    return string.join('')
  };
  

//replaceLettersOfString('stringy')
