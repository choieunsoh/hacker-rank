function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b)
  const sum = arr.reduce((s, x) => s + x, 0)
  const [min, max] = [sum - arr[arr.length - 1], sum - arr[0]]
  console.log(`${min} ${max}`)
}

miniMaxSum([1, 2, 3, 4, 5])
miniMaxSum([7, 69, 2, 221, 8974])
