const books = [];
const RENDER_EVENT = 'render-book';
const SAVED_EVENT = 'saved-book';
const STORAGE_KEY = 'Books';
const serchButton = document.getElementById("searchSubmit");
const favDialogUncompleted = document.getElementById('favDialog-uncomplited');
const deleteDialogUncompleted = document.getElementById('delete-uncomplited');
const favDialogCompleted = document.getElementById('favDialog-completed');
const deleteDialogCompleted = document.getElementById('delete-completed');
var idRemove = "";
const textBook = document.getElementById('title');
const textAuthor = document.getElementById('author');
const year = document.getElementById('year');


function generateId() {
  return +new Date();
}

function generateBooksObject(id, title, author, year, isCompleted) {
  return {
    id,
    title,
    author,
    year,
    isCompleted
  }
}

function findBook(bookId) {
  for (const bookItem of books) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }
  return null;
}

function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }
  return -1;
}

function isStorageExist() {
  if (typeof (Storage) === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    textBook.value = ""
    textAuthor.value = ""
    year.value = ""
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}


function makeBook(bookObject) {
  const {id, title, author, year, isCompleted} = bookObject;

  const textTitle = document.createElement('h2');
  textTitle.innerText = title;

  const textAuthor = document.createElement('p');
  textAuthor.innerText = `Penulis : ${author}`;
  textAuthor.style.marginTop = '20px';
  
  const textYear = document.createElement('p');
  textYear.innerText = `Tahun : ${year}`;


  const textContainer = document.createElement('div');
  textContainer.classList.add('inner');
  textContainer.append(textTitle, textAuthor, textYear);

  const container = document.createElement('div');
  container.classList.add('item', 'shadow')
  container.append(textContainer);
  container.setAttribute('id', `book-${id}`);

  if (isCompleted) {
    const undoButton = document.createElement('button');
    undoButton.classList.add('undo-button');
    undoButton.addEventListener('click', function () {
      undoBookFromCompleted(id);
    });

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.addEventListener('click', function () {
      favDialogCompleted.showModal()
      idRemove = id
    });


    container.append(undoButton, trashButton);
    
  } else {

    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.addEventListener('click', function () {
      addBooksToCompleted(id); 
    });

    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.addEventListener('click', function () {
      favDialogUncompleted.showModal()
      idRemove = id
    });
    container.append(checkButton, trashButton);
  }

  return container;
}

function addBook() {
  var generatedID = generateId();
  var bookObject = generateBooksObject(generatedID, textBook.value, textAuthor.value, year.value, false);
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function addBooksToCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function removeBookFromUncompleted(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
  favDialogUncompleted.close();
}


function removeBookFromCompleted(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
  favDialogCompleted.close();
}

function undoBookFromCompleted(bookId) {

  const bookTarget = findBook(bookId);
  if (bookTarget == null) return;

  bookTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('form');

  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener(SAVED_EVENT, () => {
  console.log(localStorage.getItem(STORAGE_KEY));
});

document.addEventListener(RENDER_EVENT, () => renderBook(books))

function renderBook(findBySearch) {
  const uncompletedBOOKList = document.getElementById('books');
  const listCompleted = document.getElementById('completed-books');

  uncompletedBOOKList.innerHTML = '';
  listCompleted.innerHTML = '';

  for (const bookItem of findBySearch) {
    const bookElement = makeBook(bookItem);
    if (bookItem.isCompleted) {
      listCompleted.append(bookElement);
    } else {
      uncompletedBOOKList.append(bookElement);
    }
  }
}

serchButton.addEventListener('click', function(e){
  e.preventDefault()
  const value = document.getElementById('searchBookTitle').value;
  const boooks = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const fb = boooks.filter(function(item) {
    return item.title.toLowerCase().includes(value.toLowerCase())
  })
  renderBook(fb)
})


favDialogUncompleted.addEventListener('close', () => {
  console.log(000)
});

deleteDialogUncompleted.addEventListener("click", function(e) {
  e.preventDefault()
  removeBookFromUncompleted(idRemove)
});

favDialogCompleted.addEventListener('close', () => {
  console.log(000)
});

deleteDialogCompleted.addEventListener("click", function(e) {
  e.preventDefault()
  removeBookFromCompleted(idRemove)
});
