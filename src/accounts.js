function findAccountById(accounts, id) {
  // Find all accounts whos id matches the inputted id
  return accounts.find((account) => account.id === id);
}



function sortAccountsByLastName(accounts) {
  // Sort all the accounts alphabetically by last name
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}



function getTotalNumberOfBorrows(account, books) {
  // Loop through books borrows, count how many times the inputted accounts id shows up
  return books.reduce((total, book) => {const idNumber = book.borrows.filter(borrow => borrow.id === account.id).length;
  return total + idNumber;
  },0);
}



function getBooksPossessedByAccount(account, books, authors) {
  // Varibale to store the books and author the inputted account has currently checked out
  const accountBorrows = [];
  // Filter books for books whos borrows id matches the account id and with the return as false
  books.filter((book) => {
    if (book.borrows[0].id === account.id && book.borrows[0].returned === false) {
      // Add a key called author with the authors information as the value
      let bookauthor = authors.find((author) => author.id === book.authorId);
      book.author = bookauthor;
      // Add to the array
      accountBorrows.push(book);
    }
  })
  return accountBorrows;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
