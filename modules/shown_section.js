import {
  booksSection, addBookSection, contactSection, listLink, addNewLink, contactLink,
} from './varibles.js';

// Single Page Application
export default function showSection() {
  if (window.location.hash === '#books') {
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