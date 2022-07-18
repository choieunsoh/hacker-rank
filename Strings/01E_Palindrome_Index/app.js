// https://www.hackerrank.com/challenges/palindrome-index/problem
// Palindrome Index
function palindromeIndex(s) {
  // Write your code here
  function isPalindrome(word, l = 0, r = word.length - 1) {
    while (l < r) if (word[l++] !== word[r--]) return false;
    return true;
  }
  if (isPalindrome(s)) return -1;

  const N = s.length;
  for (let i = 0, j = N - 1; i < N, j >= 0; i++, j--) {
    if (s[i] !== s[j]) {
      if (s[i + 1] === s[j]) {
        const word = s.substring(i + 1, j + 1);
        if (isPalindrome(word)) return i;
      }
      if (s[i] === s[j - 1]) {
        const word = s.substring(i, j);
        if (isPalindrome(word)) return j;
      }
    }
  }
  return -1;
}

var words = [
  'aaab',
  'baa',
  'aaa',
  'hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh',
];
var expected = [3, 0, -1, 44];
for (let i = 0; i < expected.length; i++) {
  console.log(palindromeIndex(words[i]), expected[i]);
}
