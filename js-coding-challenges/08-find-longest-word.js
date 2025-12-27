const findLongestWord = (sentence) => {
  const wordsArr = sentence.split(' ')

  let longestWord = ''

  wordsArr.forEach((word) => {
    if (word.length > longestWord.length) longestWord = word
  })

  return longestWord
}

console.log(findLongestWord('Hi I am Sachin I am a UI Developer'))
console.log(findLongestWord('The fox jumped'))
console.log(findLongestWord('Hello world!!!!!!'))
