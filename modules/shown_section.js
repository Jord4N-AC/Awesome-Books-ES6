import { navLinks, sections, } from './varibles.js';

// Single Page Application
export default function showSection() {
  let element;
  navLinks.forEach((link, i) => {
    if (
      link.getAttribute('href')
      === window.location.hash
      ) {
        element = i;
    }
    link.classList.remove('highlight-link');
    sections[i].classList.remove('show-section');
  });
  navLinks[element].classList.toggle('highlight-link');
  sections[element].classList.toggle('show-section');
}