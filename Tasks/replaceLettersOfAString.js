const replaceLettersOfString = (word) => {
  let string = word
  for (let i = word.length - 1; i >= 0; i-= 1) {
    if (i % 2 === 0) string = string.replace(word[i],'4')
  }
  return string
};

replaceLettersOfString('stringy')