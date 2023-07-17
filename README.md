# local_library
Thinkful Local Library Project

This project creates the functionallity for a local libraries website utilizing the three provided datasets:
1. Accounts: an array of account objects that represents a person registered with the library. Each object includes their id, name: first and last, picture, age, company, email, and the date they regitstered
2. Authors: an array of author objetcs that represent someone who wrote one or more books in the library. Each object includes their id and their name: first and last
3. Books: an array of objetcs that represent a physical book. Each object includes its id, title, genre, authorid, and borrows: user id and returned status

There are four functions in account.js
- findAccountById(): returns the account that has the matching ID
- sortAccountByLastName():  returns the accounts sorted alphabetically by last name
- getTotalNumberOfBorrows(): returns the number of times the inputted account appears in any of the books
- getBooksPossessedByAccount(): returns all the books, including their author information, that the inputted user currently has checked out

There are four functions in book.js
- findAuthorById(): returns the author that has an id that matches the inputted id
- findBookById(): returns the book that has an id that matches the inputted id
- partitionBooksByBorrow(): returns a list with two lists inside of it. One lists all the books currently checked out, and the other lists all the books returned
- getBorrowersForBook(): returns 10 or less of the accounts that have borrowed the inputted book with the accounts returned status

There are seven functions in home.js
- getTotalBooksCount(): returns the total number of books
- getTotalAccountsCount(): returns the total number of accounts
- getBooksBorrowedCount(): returns the total number of all the books currently checked out
- getMostCommonGenres(): returns the top 5 most common occuring genres, ordered from most common to least
- getMostPopularBooks(): returns the top 5 most popular books in the library
- getMostPopularAuthors(): returns the top 5 most popular authors whose books have been checked out the most
