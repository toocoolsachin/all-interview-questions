function curry(func) {
  return function (date) {
    return function (level) {
      return function (message) {
        return func.apply(this, [date, level, message])
      }
    }
  }
}

function log(date, level, message) {
  return `${date}-${level}-${message}`
}

const logger = curry(log)
console.log(logger(Date.now())('INFO')('info message'))

const logNow = logger(Date.now())
console.log(logNow('Error')('Error msg'))

const logInfoNow = logNow('INFO')
console.log(logInfoNow('Info message now'))

// Advanced curry implementation
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

function sum(a, b, c) {
  return a + b + c
}

const curriedSum = curry(sum)
console.log(curriedSum(1, 2, 3))
console.log(curriedSum(1)(2, 3))
console.log(curriedSum(1)(2)(3))
