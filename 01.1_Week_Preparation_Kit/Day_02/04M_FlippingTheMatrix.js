function flippingMatrix(matrix) {
  // Write your code here
  const N = matrix.length / 2
  const K = 2 * N - 1
  let sum = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      sum += Math.max(
        matrix[i][j],
        matrix[i][K - j],
        matrix[K - i][j],
        matrix[K - i][K - j]
      )
    }
  }
  return sum
}

var matrix = [
  [1, 2],
  [3, 4],
]
console.log(flippingMatrix(matrix))

var matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
]
console.log(flippingMatrix(matrix))

var matrix = [
  [107, 54, 128, 15],
  [12, 75, 110, 138],
  [100, 96, 34, 85],
  [75, 15, 28, 112],
]
console.log(flippingMatrix(matrix))
