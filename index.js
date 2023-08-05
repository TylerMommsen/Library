let myLibrary = [];

function Book(author, title, pages, hasRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.hasRead = hasRead;
}

Book.prototype.updateHasRead = function () {
  if (this.hasRead === true) {
    this.hasRead = false;
  } else {
    this.hasRead = true;
  }
}

function isInLibrary(author) {
  myLibrary.forEach(function (value) {
    if (value.author === author) {
      return true;
    }
  })
}

function handleBookForm() {
  formContainer.style.display = 'flex';
  darkOverlay.style.display = 'block';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let author = authorInput.value;
    let title = titleInput.value;
    let pages = pagesInput.value;
    let hasRead = hasReadInput.checked;
    addBookToLibrary(author, title, pages, hasRead);
    formContainer.style.display = 'none';
  })
}

function addBookToLibrary(author, title, pages, hasRead) {
  if (!isInLibrary(author)) {
    addNewBook(author, title, pages, hasRead);
  }
}

function addNewBook(author, title, pages, hasRead) {
  let newBookObj = new Book(author, title, pages, hasRead)
  const newBook = document.createElement('div');
  const newAuthor = document.createElement('p');
  const newTitle = document.createElement('p');
  const newPages = document.createElement('p');
  const newHasRead = document.createElement('button');
  const remove = document.createElement('button');

  newBook.classList.add('book');
  newAuthor.id = 'book-author';
  newHasRead.classList.add('btn', 'has-read');
  remove.classList.add('btn', 'remove-btn');

  newHasRead.addEventListener('click', function () {
    newBookObj.updateHasRead();
    console.log(newBookObj.hasRead);
    if (newBookObj.hasRead) {
      newHasRead.textContent = 'yes';
    } else {
      newHasRead.textContent = 'no';
    }
  });

  remove.addEventListener('click', function () {
    removeBtn(remove);
  })

  newAuthor.textContent = author;
  newTitle.textContent = title;
  newPages.textContent = pages;

  if (hasRead) {
    newHasRead.textContent = 'yes';
  } else {
    newHasRead.textContent = 'no';
  }

  remove.textContent = 'remove';
  
  newBook.appendChild(newAuthor);
  newBook.appendChild(newTitle);
  newBook.appendChild(newPages);
  newBook.appendChild(newHasRead);
  newBook.appendChild(remove);

  myLibrary.push(newBookObj);
  booksContainer.appendChild(newBook);
}

const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', handleBookForm);

const formContainer = document.querySelector('.form-container');
const darkOverlay = document.querySelector('.dark-overlay');
const form = document.querySelector('#add-new-book-form');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const hasReadInput = document.querySelector('#is-read');
const booksContainer = document.querySelector('.books-container');


function removeBtn(button) {
  let buttonParent = button.parentNode;
  let bookTitle = buttonParent.firstElementChild.textContent;

  myLibrary.forEach(function (value, i) {
    if (value.author === bookTitle) {
      myLibrary.splice(i, 1);
      buttonParent.remove();
    }
  })
}

