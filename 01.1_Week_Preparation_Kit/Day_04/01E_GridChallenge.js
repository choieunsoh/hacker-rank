function gridChallenge(grid) {
  // Write your code here
  const lines = []
  for (let i = 0; i < grid.length; i++) {
    const line = grid[i].split('').sort()
    lines.push(line)
  }

  for (let c = 0; c < lines[0].length; c++) {
    for (let r = 1; r < lines.length; r++) {
      if (lines[r - 1][c] > lines[r][c]) {
        return 'NO'
      }
    }
  }
  return 'YES'
}

var grid = ['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv']
console.log(gridChallenge(grid))

var grid = ['abc', 'lmp', 'qrt']
console.log(gridChallenge(grid))

var grid = ['mpxz', 'abcd', 'wlmf']
console.log(gridChallenge(grid))

var grid = ['abc', 'hjk', 'mpq', 'rtv']
console.log(gridChallenge(grid))
