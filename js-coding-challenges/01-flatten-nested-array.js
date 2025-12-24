console.time()

function flattenArray(arr) {
  const stack = [...arr]
  const result = []

  while (stack.length) {
    const next = stack.pop()
    if (Array.isArray(next)) stack.push(...next)
    else result.push(next)
  }

  return result.reverse()
}

console.timeEnd()

// Example usage:
const nestedArray = [1, [2, [3, 4], [7, 5]], 6]
const flattenedArray = flattenArray(nestedArray)
console.log(flattenedArray) // Output: [1, 2, 3, 4, 7, 5, 6]

const result = []

function flatArray(arr) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray(item)
    } else {
      result.push(item)
    }
  })

  return result
}

console.log(flatArray([1, [2, [3, 4], [7, 5]], 6]))
