// Show a counter next to link1 after adding a book
export const showBookCounter = (
  oldLength, newLegth, bookCounter,
  allRecent = document.querySelectorAll('.recent-added'),
) => {
  bookCounter.classList.remove('highlight-counter');
  if (newLegth > oldLength) {
    bookCounter.innerHTML = allRecent.length;
    bookCounter.style.display = 'initial';
    bookCounter.classList.add('highlight-counter');
  }
}

// Remove counter when clicking link1
export const hideBookCounter = (navLinks, bookCounter, hash = window.location.hash) => {
  if (hash === navLinks[0].getAttribute('href')) {
    bookCounter.style.display = 'none';
  }
}