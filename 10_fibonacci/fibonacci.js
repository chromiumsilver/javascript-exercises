// optimized memoization
const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  if (count == 0) return 0;

  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= count; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }

  return firstPrev;
};

// memoization
// const fibonacci = function (n) {
//   let num = +n;
//   if (num < 0) return "OOPS";
//   if (num <= 1) return num;
//   let fib = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib[num];
// };

// Do not edit below this line
module.exports = fibonacci;

// recursive
// const fibonacci = function (n) {
//   if (n == 1 || n == 2) return 1;
//   return fibonacci(n - 2) + fibonacci(n - 1);
// };
