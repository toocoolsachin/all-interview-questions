Array.prototype.myReduce = function (cb, initVal = 0) {
  if (!this.length && initVal === undefined)
    throw TypeError('Reduce of empty array with no initial value')

  let result = initVal

  for (let i = 0; i < this.length; i++) {
    result = cb(result, this[i], i, this)
  }

  return result
}

const arr = [1, 2, 3, 4]
console.log(arr.reduce((acc, curr) => acc + curr, 1))
console.log(arr.myReduce((acc, curr) => acc + curr, 1))
