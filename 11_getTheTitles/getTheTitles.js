const getTheTitles = function (books) {
  return books.map((book) => book.title);
  // Alternatively
  // return Array.from(books, (book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
