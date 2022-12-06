// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(books, bookName) {
  return [...books, bookName];
    // Change code above this line
}

// Change code below this line
function remove(books, bookName) {
  const newBooks = [...books];
  const book_index = newBooks.indexOf(bookName);
  if (book_index >= 0) {

    newBooks.splice(book_index, 1);
    return newBooks;

    // Change code above this line
    }
}