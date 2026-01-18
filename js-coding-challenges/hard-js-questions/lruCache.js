class LRUCache {
  constructor(capacity) {
    this.capacity = Number(capacity)
    this.cache = new Map()
  }

  get(key) {
    if (!this.cache.has(key)) return -1

    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  }

  put(key, value) {
    if (this.cache.get(key)) {
      this.cache.delete(key)
    } else if (this.cache.size === this.capacity) {
      const lruKey = this.cache.keys().next().value
      this.cache.delete(lruKey)
    }

    this.cache.set(key, value)
  }
}

const cache = new LRUCache(2)

// Put values in cache
cache.put(1, 1) // cache: {1: 1}
cache.put(2, 2) // cache: {1: 1, 2: 2}

// Get value for key 1
console.log(cache.get(1)) // returns 1; cache: {2: 2, 1: 1} (1 is now MRU)

// Insert another key (evicts key 2, which is now LRU)
cache.put(3, 3) // cache: {1: 1, 3: 3}

// Key 2 should be evicted
console.log(cache.get(2)) // returns -1

// Insert another key (evicts key 1)
cache.put(4, 4) // cache: {3: 3, 4: 4}

// Key 1 should be evicted
console.log(cache.get(1)) // returns -1

// Key 3 should be present
console.log(cache.get(3)) // returns 3; cache: {4: 4, 3: 3}

// Key 4 should be present
console.log(cache.get(4)) // returns 4; cache: {3: 3, 4: 4}
