function sendChatMessage(message) {
  console.log(`Sending message: ${message}`)
}

function throttle(fn, delay) {
  let lastCall = 0

  return function (...args) {
    let now = Date.now()

    if (now - lastCall < delay) return

    lastCall = now
    return fn(...args)
  }
}

const sendChatMessageInSlowMode = throttle(sendChatMessage, 2 * 1000)

sendChatMessageInSlowMode('Hi')
sendChatMessageInSlowMode('Hello')
sendChatMessageInSlowMode('Hi spam')
sendChatMessageInSlowMode('Hi spam 2 times')
