function processData(input) {
  //Enter your code here
  const stack = []
  const lines = input.split('\n')
  for (const line of lines) {
    const Q = line.split(' ')
    if (Q[0] === '1') {
      stack.push(Q[1])
    } else if (Q[0] === '2') {
      stack.shift()
    } else if (Q[0] === '3') {
      console.log(stack[0])
    }
  }
}

var input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`

processData(input)
