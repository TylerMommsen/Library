let myLibrary = [];

function Book(author, title, pages, hasRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.hasRead = hasRead;
}

const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', handleBookForm);

function isInLibrary(author) {
  myLibrary.forEach(function (value) {
    if (value.author === author) {
      return true;
    }
  })
}

const formContainer = document.querySelector('.form-container');
const form = document.querySelector('#add-new-book-form');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const hasReadInput = document.querySelector('#is-read');

function handleBookForm() {
  formContainer.style.display = 'flex';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let author = authorInput.value;
    let title = titleInput.value;
    let pages = pagesInput.value;
    let hasRead = hasReadInput.checked;
    if (hasRead === true) {
      hasRead = 'yes';
    } else {
      hasRead = 'no';
    }
    addBookToLibrary(author, title, pages, hasRead);
    formContainer.style.display = 'none';
  })
}

function addBookToLibrary(author, title, pages, hasRead) {
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