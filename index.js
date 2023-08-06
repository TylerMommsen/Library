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
  myLibrary.forEach(function (book) {
    if (book.author === author) {
      return true;
    }
  })
}

function addBookToLibrary(author, title, pages, hasRead) {
  if (!isInLibrary(author)) {
    let newBookObj = new Book(author, title, pages, hasRead)
    myLibrary.push(newBookObj);

    createBookElement(author, title, pages, hasRead, newBookObj); // create dom elements
  }
}

function createBookElement(author, title, pages, hasRead, newBookObj) {
  const newBook = document.createElement('div');
  const newAuthor = document.createElement('p');
  const newTitle = document.createElement('p');
  const newPages = document.createElement('p');
  const newHasRead = document.createElement('button');
  const remove = document.createElement('button');

  newBook.classList.add('book');
  newAuthor.id = 'book-author';
  newHasRead.classList.add('btn', 'green-btn');
  remove.classList.add('btn', 'red-btn');

  newHasRead.addEventListener('click', function () {
    newBookObj.updateHasRead();
    if (newBookObj.hasRead) {
      newHasRead.textContent = 'Read';
      newHasRead.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
      newHasRead.style.color = 'black';
    } else {
      newHasRead.textContent = 'Not Read';
      newHasRead.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
      newHasRead.style.color = 'white';
    }
  });

  remove.addEventListener('click', function () {
    removeBtn(remove);
  })

  newAuthor.textContent = author;
  newTitle.textContent = title;
  newPages.textContent = pages + ' pages';

  if (hasRead) {
    newHasRead.textContent = 'Read';
    newHasRead.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
    newHasRead.style.color = 'black';
  } else {
    newHasRead.textContent = 'Not Read';
    newHasRead.style.backgroundColor = 'rgba(255, 0, 0, 0.8)';
    newHasRead.style.color = 'white';
  }

  remove.textContent = 'Remove';
  
  newBook.appendChild(newAuthor);
  newBook.appendChild(newTitle);
  newBook.appendChild(newPages);
  newBook.appendChild(newHasRead);
  newBook.appendChild(remove);

  booksContainer.appendChild(newBook);
}

const addBookBtn = document.querySelector('#add-book-btn');

// reference to dom elements
const formContainer = document.querySelector('.form-container');
const darkOverlay = document.querySelector('.dark-overlay');
const form = document.querySelector('#add-new-book-form');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const hasReadInput = document.querySelector('#is-read');
const booksContainer = document.querySelector('.books-container');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let author = authorInput.value;
  let title = titleInput.value;
  let pages = pagesInput.value;
  let hasRead = hasReadInput.checked;
  formContainer.style.display = 'none';
  darkOverlay.style.display = 'none';
  authorInput.value = '';
  titleInput.value = '';
  pagesInput.value = '';
  hasReadInput.checked = false;
  addBookToLibrary(author, title, pages, hasRead);
})

addBookBtn.addEventListener('click', () => {
  formContainer.style.display = 'flex';
  darkOverlay.style.display = 'block';
});

function removeBtn(button) {
  let buttonParent = button.parentNode;
  let bookAuthor = buttonParent.firstElementChild.textContent;

  myLibrary.forEach(function (book, i) {
    if (book.author === bookAuthor) {
      myLibrary.splice(i, 1);
      buttonParent.remove();
    }
  })
}

