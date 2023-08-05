let myLibrary = [];

function Book(author, title, pages, hasRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.hasRead = hasRead;
}

let addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
  let author = prompt('What is the book author?');
  let title = prompt('What is the book title?');
  let pages = prompt('How many pages?');
  let hasRead = prompt('Have you read it? Yes/No');
  myLibrary.push(new Book(author, title, pages, hasRead));
  displayBooks();
}

function displayBooks() {
  myLibrary.forEach(function (value, index) {
    console.log(value.author);
    console.log(value.title);
    console.log(value.pages);
    console.log(value.hasRead);
  })
}