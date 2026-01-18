function dotNotationToObject(str, finalValue) {
  const keys = str.split('.')
  let result = {}
  let current = result

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    current[key] = i === keys.length - 1 ? finalValue : {}
    current = current[key]
  }

  return result
}

// Test the function
const output = dotNotationToObject('a.b.c', 'someValue')
console.log(output) // Output: {a: {b: {c: "someValue"}}}
