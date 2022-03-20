function isBalanced(S) {
  // Write your code here
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  const stack = []
  for (const s of S) {
    if (map[s]) {
      stack.push(s)
    } else {
      const last = stack[stack.length - 1]
      if (map[last] !== s) return 'NO'
      stack.pop()
    }
  }
  return stack.length === 0 ? 'YES' : 'NO'
}

var S = '{[()]}'
console.log(isBalanced(S))

var S = '{[(])}'
console.log(isBalanced(S))

var S = '{{[[(())]]}}'
console.log(isBalanced(S))

var S = '{(([])[])[]}'
console.log(isBalanced(S))

var S = '{(([])[])[]]}'
console.log(isBalanced(S))

var S = '{(([])[])[]}[]'

var S = '{{([])}}'
console.log(isBalanced(S))

var S = '{{)[](}}'
console.log(isBalanced(S))
