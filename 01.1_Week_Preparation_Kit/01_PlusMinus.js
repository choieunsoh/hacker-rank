function plusMinus(arr) {
  // Write your code here
  arr.sort((a, b) => a - b)
  const N = arr.length
  let [neg, zero, pos] = [0, 0, 0]
  zero = arr.indexOf(0)
  pos = arr.findIndex((x) => x > 0)
  if (pos === -1) pos = N
  if (zero !== -1) {
    neg = zero / N
    zero = (pos - zero) / N
  } else {
    neg = pos / N
    zero = 0
  }
  pos = (N - pos) / N

  console.log(pos.toFixed(6))
  console.log(neg.toFixed(6))
  console.log(zero.toFixed(6))
}

var arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)

var arr = [1, 2, 3, -1, -2, -3, 0, 0]
plusMinus(arr)
