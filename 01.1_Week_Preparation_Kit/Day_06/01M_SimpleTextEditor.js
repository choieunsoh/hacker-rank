function processData(input) {
  //Enter your code here
  const lines = input.split('\n')
  const len = Number(lines[0])

  let text = ''
  let stack = []
  for (let i = 1; i <= len; i++) {
    const [cmd, arg] = lines[i].split(' ')
    if (cmd === '1') {
      stack.push(text)
      text += arg
    } else if (cmd === '2') {
      stack.push(text)
      text = text.substring(0, text.length - Number(arg))
    } else if (cmd === '3') {
      console.log(text[Number(arg) - 1])
    } else if (cmd === '4') {
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
