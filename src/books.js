function findAuthorById(authors, id) {
  // Find the author that has the same id as the inputted id
  return authors.find((author) => author.id === id);
}



function findBookById(books, id) {
  // Find the book that has the same book id as the inputted id
  return books.find((book) => book.id === id);
}



function partitionBooksByBorrowedStatus(books) {
  // Filter the books for all books whos returned status is currently false
  const checkedOut = books.filter((book) => book.borrows[0].returned === false);
  // Filter the books for all books whos returned status is currently true
  const returned = books.filter((book) => book.borrows[0].returned === true);
  return [checkedOut,returned];
}



function getBorrowersForBook(book, accounts) {
  // Collect all the inputted books borrows information
  let result = book.borrows.map(borrow => {
    // Find all the accounts whos account id match the ids listed in the books borrows 
    const account = accounts.find(account => account.id === borrow.id);
    // Add that accounts return status to that account
    account.returned = borrow.returned;
    return account;
  })
  // Return the first 10 accounts
  return result.slice(0,10);
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
