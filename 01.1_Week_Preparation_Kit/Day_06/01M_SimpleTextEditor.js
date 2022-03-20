function processData(input) {
  //Enter your code here
  const lines = input.split('\n')
  const len = Number(lines[0])

  let text = []
  let stack = []
  for (let i = 1; i <= len; i++) {
    const s = lines[i].split(' ')
    if (s[0] === '1') {
      text.push(...s[1].split(''))
      stack.push([...text])
    } else if (s[0] === '2') {
      text = text.slice(0, text.length - Number(s[1]))
      if (text.length > 0) {
        stack.push([...text])
      }
    } else if (s[0] === '3') {
      console.log(text[Number(s[1] - 1)])
    } else if (s[0] === '4') {
      text = stack.pop()
    }
  }
}

var input = `8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`

processData(input)
