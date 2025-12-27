function findMax(arr) {
  if (arr.length === 0) {
    return undefined // Handle empty array case
  }

  let max = arr[0]

  arr.forEach((num) => {
    if (num > max) max = num
  })

  return max
}

// Example usage:
const numbers = [1, 6, -33, 9, 4, 8, 2]
console.log('Maximum number is:', findMax(numbers))
