let myLibrary = [];

function Book(author, title, pages, hasRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.hasRead = hasRead;
}

const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', addBookToLibrary);

function isInLibrary(author) {
  myLibrary.forEach(function (value) {
    if (value.author === author) {
      return true;
    }
  })
}

function addBookToLibrary() {
  let author = prompt('What is the book author?');
  let title = prompt('What is the book title?');
  let pages = prompt('How many pages?');
  let hasRead = prompt('Have you read it? Yes/No');

  if (!isInLibrary(author)) {
    myLibrary.push(new Book(author, title, pages, hasRead));
    addNewBook(author, title, pages, hasRead);
  }

}

const booksContainer = document.querySelector('.books-container');

function addNewBook(author, title, pages, hasRead) {
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    const newAuthor = document.createElement('p');
    const newTitle = document.createElement('p');
    const newPages = document.createElement('p');
    const newHasRead = document.createElement('button');
    newHasRead.classList.add('btn', 'has-read');
    newAuthor.textContent = author;
    newTitle.textContent = title;
    newPages.textContent = pages;
    newHasRead.textContent = hasRead;

    newBook.appendChild(newAuthor);
    newBook.appendChild(newTitle);
    newBook.appendChild(newPages);
    newBook.appendChild(newHasRead);

    booksContainer.appendChild(newBook);
}