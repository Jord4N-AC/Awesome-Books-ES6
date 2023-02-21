// Book Class and methods for adding books
export default class BookObject {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static theBooks = [];

  add = (bookList) => {
    const bookContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    const titleBook = document.createElement('h5');
    const authorBook = document.createElement('h5');
    const idBook = document.createElement('h5');
    const removeButton = document.createElement('button');

    bookContainer.classList.add('book-container');
    infoContainer.classList.add('book-info');
    titleBook.classList.add('book-title');
    authorBook.classList.add('book-author');
    removeButton.classList.add('remove-btn');

    titleBook.innerHTML = `${this.title}&nbsp;`;
    authorBook.innerHTML = `by ${this.author}&nbsp;`;
    idBook.innerHTML = this.id;
    removeButton.innerHTML = 'Remove';

    idBook.style.display = 'none';

    infoContainer.append(titleBook, authorBook, idBook);
    bookContainer.append(infoContainer, removeButton);
    bookList.append(bookContainer);

    removeButton.addEventListener('click', (event) => {
      BookObject.remove(event, bookList);
    });
  }

  static remove = (event, bookList) => {
    BookObject.theBooks = BookObject.theBooks.filter((book) => +book.id
      !== +event.target.parentNode.children[0].children[2].innerHTML);
    event.target.parentNode.remove();

    BookObject.theBooks.forEach((book, i) => {
      bookList.children[i].children[0].children[2].innerHTML = i;
      book.id = i;
    });
    localStorage.setItem('booksArray', JSON.stringify(BookObject.theBooks));
  }

  static addBooks = (bookList, inputTitle, inputAuthor, alertMessage) => {
    if (
      inputTitle.value !== ''
        && inputAuthor.value !== ''
    ) {
      const newBook = new BookObject(
        inputTitle.value, inputAuthor.value, BookObject.theBooks.length,
      );
      newBook.add(bookList);
      BookObject.theBooks.push(newBook);

      localStorage.setItem('booksArray', JSON.stringify(BookObject.theBooks));

      inputTitle.value = '';
      inputAuthor.value = '';
      alertMessage.style.display = 'none';
    } else {
      alertMessage.textContent = 'Empty field';
      alertMessage.style.display = 'initial';
    }
  }

  static loadBooks = (
    bookList, navLinks, sections, showSection,
    data = JSON.parse(localStorage.getItem('booksArray')),
  ) => {
    if (data !== null) {
      data.forEach((book, i) => {
        const newBook = new BookObject(book.title, book.author, i);
        newBook.add(bookList); BookObject.theBooks.push(newBook);
      });
    }
    showSection(navLinks, sections);
  }
}