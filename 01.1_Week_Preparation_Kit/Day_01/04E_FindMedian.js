function findMedian(arr) {
  // Write your code here
  const N = arr.length
  arr.sort((a, b) => a - b)
  if (N % 2 === 1) {
    return arr[(N - 1) / 2]
  } else {
    return (arr[N / 2] + arr[N / 2 - 1]) / 2
  }
}

var arr = [0, 1, 2, 4, 6, 5, 3]
console.log(findMedian(arr))
