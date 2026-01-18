class MyEventEmitter {
  constructor() {
    this.events = new Map()
  }

  on(eventName, listener) {
    if (!this.events.has(eventName)) this.events.set(eventName, new Set())

    this.events.get(eventName).add(listener)
  }

  emit(eventName, ...args) {
    this.events.get(eventName)?.forEach((listener) => listener(...args))
  }

  off(eventName, listener) {
    const listeners = [...this.events.get(eventName)]
    this.events.set(eventName, new Set(listeners.filter((l) => l !== listener)))
  }

  once(eventName, listener) {
    const wrapper = (...args) => {
      listener(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }

  removeAllListeners(eventName) {
    this.events.delete(eventName)
  }
}

const eventEmitter = new MyEventEmitter()

const sendWhatsApp = (username) => console.log(`Send WhatsApp to ${username}`)
eventEmitter.on('user:signup', (username) =>
  console.log('User Signup', username)
)
eventEmitter.once('user:signup', (username) =>
  console.log(`Sending Email to ${username}`)
)
eventEmitter.on('user:signup', sendWhatsApp)
eventEmitter.on('user:logout', (username) =>
  console.log(`User logout ${username}`)
)

eventEmitter.removeAllListeners('user:logout')

eventEmitter.emit('user:signup', '@sachin')
eventEmitter.emit('user:signup', '@mamta')
eventEmitter.emit('user:signup', '@vaani')
eventEmitter.emit('user:logout', '@sachin')
eventEmitter.emit('user:logout', '@mamta')
eventEmitter.emit('user:logout', '@vaani')
