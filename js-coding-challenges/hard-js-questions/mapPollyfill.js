Array.prototype.myMap = function (cb) {
  if (!this.length) return []

  const transformedArr = []
  for (let i = 0; i < this.length; i++) {
    transformedArr.push(cb(this[i], i, this))
  }
  return transformedArr
}

const arr = [1, 2, 3, 4]
console.log(arr.map((item, index) => item * 2))
console.log(arr.myMap((item, index) => item * 2))
