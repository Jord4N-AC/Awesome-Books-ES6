import { navLinks, sections, inputTitle } from './varibles.js';

// Single Page Application
export default function showSection(hash = window.location.hash || '#books') {
  let element;
  navLinks.forEach((link, i) => {
    if (
      link.getAttribute('href')
      === hash
      ) {
        element = i;
    }
    link.classList.remove('highlight-link');
    sections[i].classList.remove('show-section');
  });
  navLinks[element].classList.add('highlight-link');
  sections[element].classList.add('show-section');
}