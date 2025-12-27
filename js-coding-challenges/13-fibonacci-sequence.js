function fibonacciSequence(numTerms) {
  if (numTerms <= 0) return []
  else if (numTerms === 1) return [0]

  const sequence = [0, 1]

  for (let i = 2; i < numTerms; i++) {
    const nextFibonacci = sequence[i - 1] + sequence[i - 2]
    sequence.push(nextFibonacci)
  }

  return sequence
}

// Example usage:
const numTerms = 10
const fibonacciSeries = fibonacciSequence(numTerms)
console.log(fibonacciSeries) // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
