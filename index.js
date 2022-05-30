import { addButton, date, addBookSection } from './modules/varibles.js';
import BookObject from './modules/book_class.js';
import { highLightMessage, noHighlightMessage } from './modules/alert_message.js';
import showSection from './modules/shown_section.js';

import { DateTime } from './node_modules/luxon/src/luxon.js';

addButton.addEventListener('mousedown', highLightMessage);
addButton.addEventListener('mouseup', noHighlightMessage);
addButton.addEventListener('click', BookObject.addBooks);

BookObject.loadBooks();

// Single Page Application
window.addEventListener('hashchange', showSection);

// Date
const now = DateTime.now();
date.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);


window.addEventListener('click', () => {
  console.log(addBookSection);
});