function removeDuplicates(arr) {
  const result = []
  arr.forEach((item) => {
    if (result.includes(item)) return
    else result.push(item)
  })

  return result
}

console.log(removeDuplicates([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]))

function removeDuplicatesWay2(arr) {
  // Use the Set object to remove duplicates.
  // This works because Sets only store unique values
  return Array.from(new Set(arr))
  // return [...new Set(arr)] => another way
}
