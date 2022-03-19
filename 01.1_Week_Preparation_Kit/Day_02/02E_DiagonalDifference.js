function diagonalDifference(arr) {
  // Write your code here
  const N = arr.length
  let [sum1, sum2] = [0, 0]
  for (let i = 0, j = N - 1; i < N; i++, j--) {
    sum1 += arr[i][i]
    sum2 += arr[i][j]
  }
  return Math.abs(sum1 - sum2)
}

var arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]
console.log(diagonalDifference(arr))
