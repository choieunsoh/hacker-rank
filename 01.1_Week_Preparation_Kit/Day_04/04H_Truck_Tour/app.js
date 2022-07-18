// https://www.hackerrank.com/challenges/truck-tour/problem
// Truck Tour
function truckTour(pumps) {
  // Write your code here
  const N = pumps.length;
  let fuel = 0;
  let index = 0;
  for (let i = 0; i < N; i++) {
    fuel += pumps[i][0] - pumps[i][1];
    if (fuel < 0) {
      fuel = 0;
      index = i + 1;
    }
  }

  return index;
}
