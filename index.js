import { addButton } from './modules/varibles.js';
import BookObject from './modules/book_class.js';
import { highLightMessage, noHighlightMessage } from './modules/alert_message.js';
import showSection from './modules/shown_section.js';


addButton.addEventListener('mousedown', highLightMessage);
addButton.addEventListener('mouseup', noHighlightMessage);
addButton.addEventListener('click', BookObject.addBooks);

BookObject.loadBooks();


// Single Page Application
window.addEventListener('hashchange', showSection);