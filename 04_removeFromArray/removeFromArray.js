const removeFromArray = function (arr, ...values) {
  for (let value of values) {
    const idx = arr.indexOf(value);
    if (idx != -1) {
      arr.splice(idx, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
