function findSecondLargest(arr) {
  if (arr.length < 2) return -1

  let largest = -Infinity
  let secondLargest = -Infinity

  arr.forEach((item) => {
    if (item > largest) {
      secondLargest = largest
      largest = item
    } else if (item < largest && item > secondLargest) {
      secondLargest = item
    }
  })

  if (secondLargest === -Infinity) return -1

  return secondLargest
}

// Example usage:
const array = [10, 5, 20, 8, 12]
console.log(findSecondLargest(array)) // Output: 12
console.log(findSecondLargest([100, 20, 112, 22]))
console.log(findSecondLargest([1, 2, 2, 3, 3]))
console.log(findSecondLargest([3, 3, 3, 3, 3]))
