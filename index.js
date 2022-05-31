import { bookList, addButton, date, } from './modules/varibles.js';
import BookObject from './modules/book_class.js';
import { highLightMessage, noHighlightMessage } from './modules/alert_message.js';
import showSection from './modules/shown_section.js';
import showHideSuccessMessage from './modules/success_message.js';

import { DateTime } from './node_modules/luxon/src/luxon.js';

addButton.addEventListener('mousedown', highLightMessage);
addButton.addEventListener('mouseup', noHighlightMessage);
addButton.addEventListener('click', () => {
    const oldLength = bookList.children.length;
    BookObject.addBooks();
    showHideSuccessMessage(oldLength, bookList.children.length);
});

BookObject.loadBooks();

// Single Page Application
window.addEventListener('hashchange', () => {
    showSection();
});

// Date
const now = DateTime.now();
date.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);


window.addEventListener('click', () => {
});