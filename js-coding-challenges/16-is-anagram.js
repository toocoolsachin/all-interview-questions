function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false

  const freq = {}

  for (let i = 0; i < s1.length; i++) {
    if (!freq[s1[i]]) freq[s1[i]] = 1
    else freq[s1[i]] += 1
  }

  for (let i = 0; i < s2.length; i++) {
    if (freq[s2[i]]) freq[s2[i]] -= 1
    else return false
  }

  return true
}

console.log(isAnagram('managrama', 'nagaramam'))
