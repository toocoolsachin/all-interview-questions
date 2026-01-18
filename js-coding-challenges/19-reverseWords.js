const reverseWords = (str) => {
  let reversedSentence = ''
  let word = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') word += str[i]
    else {
      reversedSentence = word + ' ' + reversedSentence
      word = ''
    }
  }

  reversedSentence = word + ' ' + reversedSentence

  return reversedSentence.trim()
}

// Example usage
console.log(reverseWords('javascript is awesome')) //"awesome is javascript"
console.log(reverseWords('the quick brown fox')) //"fox brown quick the"
console.log(reverseWords('  hello world  ')) //"world hello"
