// https://www.hackerrank.com/challenges/pairs/problem
// Pairs
function pairs(k, arr) {
  // Write your code here
  let count = 0;
  const nums = new Set(arr);
  for (const num of nums) {
    const target = k + num;
    if (target !== num) {
      if (nums.has(target)) count++;
    }
  }
  return count;
}

var arr = [1, 5, 3, 4, 2],
  k = 2;
var expected = 3;
var actual = pairs(k, arr);
console.log(actual, actual === expected);

var arr = [1, 5, 3, 4, 2],
  k = 2;
var expected = 3;
var actual = pairs(k, arr);
console.log(actual, actual === expected);

var arr = [
    363374326, 364147530, 61825163, 1073065718, 1281246024, 1399469912,
    428047635, 491595254, 879792181, 1069262793,
  ],
  k = 1;
var expected = 0;
var actual = pairs(k, arr);
console.log(actual, actual === expected);

var arr = [1, 3, 5, 8, 6, 4, 2],
  k = 2;
var expected = 5;
var actual = pairs(k, arr);
console.log(actual, actual === expected);
