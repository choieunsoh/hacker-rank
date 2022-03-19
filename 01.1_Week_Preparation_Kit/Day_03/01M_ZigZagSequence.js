function findZigZagSequence(A) {
  const N = A.length
  let [start, end] = [Math.floor(N / 2), N - 1]
  while (start < end) {
    ;[A[start], A[end]] = [A[end], A[start]]
    start++
    end--
  }
  return A
}

var A = [1, 2, 3, 4, 5, 6, 7]
console.log(findZigZagSequence(A).join(' '))

var A = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(findZigZagSequence(A).join(' '))
