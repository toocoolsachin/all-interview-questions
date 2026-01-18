Array.prototype.myFilter = function (cb) {
  if (!this.length) return []

  const filteredArr = []

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      filteredArr.push(this[i])
    }
  }

  return filteredArr
}

const arr = [1, 2, 3, 4]
console.log(arr.filter((item) => item > 2))
console.log(arr.myFilter((item) => item > 2))
