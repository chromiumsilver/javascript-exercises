const palindromes = function (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr.split("").reverse().join("") === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
