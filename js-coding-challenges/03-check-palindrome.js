const checkPallindrome = (str) => {
  let l = 0
  let r = str.length - 1
  while (l < r) {
    if (str[l] === str[r]) {
      l++
      r--
    } else {
      return false
    }
  }
  return true
}

console.log(checkPallindrome('race a car')) // false
console.log(checkPallindrome('nolemon,nomelon')) // true
console.log(checkPallindrome('madam')) // true
