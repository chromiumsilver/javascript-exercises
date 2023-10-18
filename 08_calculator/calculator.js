const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((sum, x) => sum + x, 0);
};

const multiply = function (arr) {
  return arr.reduce((prod, x) => prod * x, 1);
};

const power = function (x, n) {
  return x ** n;
};

const factorial = function (n) {
  let prod = 1;
  for (let x = n; x >= 1; x--) {
    prod *= x;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
