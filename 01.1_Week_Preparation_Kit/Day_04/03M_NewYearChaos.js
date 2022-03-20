function minimumBribes(q) {
  let [count, p1, p2, p3] = [0, 1, 2, 3]
  for (let i = 0; i < q.length; i++) {
    if (q[i] === p1) {
      // 2 3 4
      p1 = p2
      p2 = p3
      p3++
    } else if (q[i] === p2) {
      // 1 3 4
      count++
      p2 = p3
      p3++
    } else if (q[i] === p3) {
      // 1 2 4
      count += 2
      p3++
    } else {
      console.log('Too chaotic')
      return
    }
  }
  console.log(count)
}

var q = [2, 1, 5, 3, 4]
minimumBribes(q)

var q = [2, 5, 1, 3, 4]
minimumBribes(q)

var q = [5, 1, 2, 3, 7, 8, 6, 4]
minimumBribes(q)

var q = [1, 2, 5, 3, 7, 8, 6, 4]
minimumBribes(q)

var q = [1, 2, 5, 3, 4, 7, 8, 6]
minimumBribes(q)
