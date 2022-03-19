function gridChallenge(grid) {
  // Write your code here
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i]
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('')
  }

  for (let c = 0; c < grid[0].length; c++) {
    for (let r = 0; r < grid.length - 1; r++) {
      if (grid[r][c].localeCompare(grid[r + 1][c]) !== -1) {
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
