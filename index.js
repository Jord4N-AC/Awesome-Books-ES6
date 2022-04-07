import { addButton } from './modules/varibles.js';
import BookObject from './modules/book_class.js';
import { highLightMessage, noHighlightMessage } from './modules/alert_message.js';


addButton.addEventListener('mousedown', highLightMessage);
addButton.addEventListener('mouseup', noHighlightMessage);
addButton.addEventListener('click', BookObject.addBooks);

BookObject.loadBooks();

// Single Page Application
const booksSection = document.getElementById('books');
const addBookSection = document.getElementById('form');
const contactSection = document.getElementById('contact');

const listLink = document.getElementById('list-link');
const addNewLink = document.getElementById('add-new-link');
const contactLink = document.getElementById('contact-link');

function loadContent() {
  if (window.location.hash === '#books-header') {
    booksSection.style.display = 'block';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'none';

    listLink.style.fontWeight = 'bold';
    addNewLink.style.fontWeight = 'normal';
    contactLink.style.fontWeight = 'normal';
  } else if (window.location.hash === '#form') {
    addBookSection.style.display = 'block';
    booksSection.style.display = 'none';
    contactSection.style.display = 'none';

    listLink.style.fontWeight = 'normal';
    addNewLink.style.fontWeight = 'bold';
    contactLink.style.fontWeight = 'normal';
  } else if (window.location.hash === '#contact') {
    contactSection.style.display = 'block';
    booksSection.style.display = 'none';
    addBookSection.style.display = 'none';

    listLink.style.fontWeight = 'normal';
    addNewLink.style.fontWeight = 'normal';
    contactLink.style.fontWeight = 'bold';
  }
}

window.addEventListener('hashchange', loadContent);