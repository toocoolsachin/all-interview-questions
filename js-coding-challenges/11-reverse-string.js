const findReverse = (sampleString) => {
  let output = ''

  for (let i = sampleString.length - 1; i >= 0; i--) {
    output += sampleString[i]
  }

  return output
}

console.log(findReverse('hello')) // olleh
console.log(findReverse('world'))
