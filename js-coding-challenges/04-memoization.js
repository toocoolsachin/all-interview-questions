function add(...args) {
  return args.reduce((sum, currVal) => sum + currVal, 0)
}

function memo(func) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    if (key in cache) {
      console.log('cache hit')
      return cache[key]
    } else {
      console.log('cache miss')
      const result = func(...args)
      cache[key] = result
      return result
    }
  }
}

const calculate = memo(add)
console.log(calculate(10, 20, 30, 40))
console.log(calculate(10, 20, 30, 40))
