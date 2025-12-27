function findSmallestWord(sentence) {
  const wordsArr = sentence.split(' ')

  let output = wordsArr[0]

  wordsArr.forEach((word) => {
    if (word.length < output.length) output = word
  })

  return output
}

console.log(findSmallestWord('Hello a test'))
console.log(findSmallestWord('The quick brown'))
