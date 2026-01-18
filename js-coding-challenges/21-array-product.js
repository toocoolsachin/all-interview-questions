function arrayProduct(arr) {
  if (arr.length <= 2) return arr
  let currIndex = 0
  const result = [...arr]
  const output = []

  for (let i = 0; i < arr.length; i++) {
    if (currIndex === i) {
      result[i] = 1
      const val = result.reduce((acc, curr) => acc * curr, result[i])
      output.push(val)
      result[i] = arr[i]
      currIndex += 1
    }
  }

  return output
}

const arr = [3, 4, 5]
console.log(arrayProduct(arr))
