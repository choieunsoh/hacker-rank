function lonelyinteger(a) {
  // Write your code here
  const nums = new Set()
  for (const x of a) {
    if (nums.has(x)) {
      nums.delete(x)
    } else {
      nums.add(x)
    }
  }
  return [...nums][0]
}

var a = [1]
console.log(lonelyinteger(a))

var a = [1, 1, 2]
console.log(lonelyinteger(a))

var a = [0, 0, 1, 2, 1]
console.log(lonelyinteger(a))
