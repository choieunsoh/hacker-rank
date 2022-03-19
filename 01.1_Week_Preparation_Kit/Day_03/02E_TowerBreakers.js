function towerBreakers(n, m) {
  // Write your code here
  return n % 2 === 0 || m === 1 ? 2 : 1
}

console.log(towerBreakers(2, 2))
console.log(towerBreakers(1, 4))
console.log(towerBreakers(1, 7))
console.log(towerBreakers(3, 7))
