function mergeAndSort(arr1, arr2) {
  // return [...arr1, ...arr2].sort()

  let i = 1,
    j = 1

  let arr1Ptr = arr1[0]
  let arr2Ptr = arr2[0]

  const mergedArray = []

  while (arr1Ptr || arr2Ptr) {
    if (arr1Ptr < arr2Ptr) {
      mergedArray.push(arr1Ptr)
      arr1Ptr = arr1[i]
      i++
    } else {
      mergedArray.push(arr2Ptr)
      arr2Ptr = arr2[j]
      j++
    }
  }

  return mergedArray
}

console.log(mergeAndSort([1, 3, 4, 5], [2, 6, 8, 9])) // [1,2,3,4,5,6,8,9]
console.log(mergeAndSort([1, 3, 5], [2, 4, 6]))
