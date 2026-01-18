function search(query) {
  console.log(query)
}

function debounce(fn, delay) {
  let timerId

  return function (...args) {
    clearInterval(timerId)
    timerId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const searchWithDebounce = debounce(search, 1000)

searchWithDebounce('H')
searchWithDebounce('HA')
searchWithDebounce('HAR')
searchWithDebounce('HARD')
searchWithDebounce('HARD J')
searchWithDebounce('HARD JS')
searchWithDebounce('HARD JS Interview')
