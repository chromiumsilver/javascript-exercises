const sumAll = function (numOne, numTwo) {
  if (
    !Number.isInteger(numOne) ||
    !Number.isInteger(numTwo) ||
    numOne < 0 ||
    numTwo < 0
  ) {
    return "ERROR";
  }
  let startInt = numOne,
    endInt = numTwo;
  if (numOne > numTwo) {
    startInt = numTwo;
    endInt = numOne;
  }
  let sum = 0;
  for (let num = startInt; num <= endInt; num++) {
    sum += num;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
