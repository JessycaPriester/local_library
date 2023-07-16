function getTotalBooksCount(books) {
  // Find the total amount of books
  return books.length;
}



function getTotalAccountsCount(accounts) {
  // Find the total amount of accounts 
  return accounts.length;
}



function getBooksBorrowedCount(books) {
  // Filter books that have not been returned
  let booksBorrowed = books.filter((book) => book.borrows[0].returned === false);
  return booksBorrowed.length;
}



// Helper function for the next three functions. Sorts from the most popular (highest) to the least popular (lowest).
function sortByPopularity(item1, item2) {
  return item2.count - item1.count;
}



function getMostCommonGenres(books) {
  // Find the genre of each book
  const genres = books.reduce((acc,book) => {
    const {genre} = book;
    // If the genre isn't already listed, add that genre and a counter set to 1
    if (!acc[genre]) acc[genre] = {name: genre, count: 1}
    // If the genre is listed, increase it's counter by 1
    else acc[genre].count++;
    return acc;
  }, {})
  // Sort the genres from most popular to least, only return the first 5
  return Object.values(genres).sort(sortByPopularity).slice(0,5);
}



function getMostPopularBooks(books) {
  // Create a variable to store the matches
  const borrows = [];
  // For each book add the book title and the number of borrows to the array
  books.map((book) => borrows.push({name: book.title, count: book.borrows.length}));
  // Sort the list of books from most popular to least popular, return the first 5
  return Object.values(borrows).sort(sortByPopularity).slice(0,5);
}



function getMostPopularAuthors(books, authors) {
  // Create a variable to store the matches
  const popularAuthors = [];
  // For each author ...
  authors.map((author) => {
    let borrows = 0;
    // ... collect their full name
    const authorsFullname = author.name.first + " " + author.name.last;
    // Filter the books whos author id matches this authors author id
    const bookMatches = books.filter((book) => book.authorId === author.id);
    // For each match increase the borrows counter by the the number of borrows that book has
    bookMatches.forEach((book) => borrows += book.borrows.length);
    // Add that author and their total count of borrows to the popularAuthors array
    popularAuthors.push({name: authorsFullname, count: borrows});
  })
  // Sort the authors from most popular to least popular, return the first 5
  return Object.values(popularAuthors).sort(sortByPopularity).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
