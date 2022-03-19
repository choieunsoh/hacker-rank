function timeConversion(s) {
  // Write your code here
  let time = s.substring(0, s.length - 2)
  let ampm = s.substring(s.length - 2)
  let h = Number(time.substring(0, 2))

  if (h === 12) {
    h = ampm === 'AM' ? 0 : 12
  } else if (ampm === 'PM') {
    h += 12
  }
  return `${h.toString().padStart(2, '0')}${time.substring(2)}`
}

var s = '07:05:45PM'
console.log(s, timeConversion(s))

var s = '01:05:45AM'
console.log(s, timeConversion(s))

var s = '01:05:45PM'
console.log(s, timeConversion(s))

var s = '12:05:45PM'

console.log(s, timeConversion(s))
var s = '12:05:45AM'
console.log(s, timeConversion(s))
