function superDigit(n, k) {
  // Write your code here
  let nums = (
    n
      .split('')
      .map(Number)
      .reduce((s, x) => s + x, 0) * k
  ).toString()
  return nums.length === 1 ? Number(nums) : superDigit(nums, 1)
}

var [n, k] = ['148', 3]
console.log(superDigit(n, k))

var [n, k] = ['9875', 4]
console.log(superDigit(n, k))

var [n, k] = ['123', 3]
console.log(superDigit(n, k))
