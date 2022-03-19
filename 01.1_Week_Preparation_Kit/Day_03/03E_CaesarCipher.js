function caesarCipher(s, k) {
  // Write your code here
  const isLetter = (c) => /[a-z]/i.test(c)
  const S = s.split('')
  let result = ''
  for (const c of S) {
    if (isLetter(c)) {
      let code = c.charCodeAt(0)
      const base = code >= 97 ? 97 : 65
      code = base + ((code - base + k) % 26)
      result += String.fromCharCode(code)
    } else {
      result += c
    }
  }
  return result
}

var s = 'middle-Outz'
console.log(caesarCipher(s, 2))

var s = 'Always-Look-on-the-Bright-Side-of-Life'
console.log(caesarCipher(s, 5))
