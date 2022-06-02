import {
    bookList, inputTitle, addButton, navLinks, sections, successMessage, bookCounter, date,
} from './modules/varibles.js';
import BookObject from './modules/book_class.js';
import { highLightMessage, noHighlightMessage } from './modules/alert_message.js';
import showSection from './modules/shown_section.js';
import showHideSuccessMessage from './modules/success_message.js';
import showRecentAdded from './modules/show_recent_added.js';
import { showBookCounter, hideBookCounter } from './modules/book_counter.js';

import { DateTime } from './modules/luxon.min.js';

// Show message for empty fields
addButton.addEventListener('mousedown', highLightMessage);
addButton.addEventListener('mouseup', noHighlightMessage);

// Add books, show a message and a counter after adding book
addButton.addEventListener('click', () => {
    const oldLength = bookList.children.length;
    BookObject.addBooks();
    showHideSuccessMessage(oldLength, bookList.childElementCount, bookList, successMessage);
    showBookCounter(oldLength, bookList.childElementCount, bookCounter);
});


// Single Page Application, show a section when clicking a link
window.addEventListener('hashchange', () => {
    showSection(navLinks, sections);
    showRecentAdded(navLinks, inputTitle);
    hideBookCounter(navLinks, bookCounter);
});

// Date
setInterval((now = DateTime.now()) => {
    date.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);

// Load Content
BookObject.loadBooks();
