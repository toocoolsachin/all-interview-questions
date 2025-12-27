function findLargestElement(arr) {
  let max = Number.NEGATIVE_INFINITY // Initialize max to smallest possible number

  function flattenArray(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item)) flattenArray(item)
      else if (item > max) max = item
    })
  }

  flattenArray(arr)

  return max
}

// Example usage:
const nestedArray = [
  [3, 4, 58],
  [709, 8, 9, [10, 11]],
  [111, 2],
]
console.log('Largest element:', findLargestElement(nestedArray))
console.log(
  findLargestElement([
    [-1, -5],
    [-2, [-3, [-4]]],
  ])
)
console.log(findLargestElement([1, [2, [3, [4]]]]))
