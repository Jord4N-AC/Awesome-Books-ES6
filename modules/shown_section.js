// Show a Section after clicking a link and highlight the link
 const showSection = (
  navLinks, sections,
  hash = window.location.hash || '#books',
) => {
  let element;
  navLinks.forEach((link, i) => {
    if (link.getAttribute('href') === hash) element = i;

    link.classList.remove('highlight-link');
    sections[i].classList.remove('show-section');
  });
  navLinks[element].classList.add('highlight-link');
  sections[element].classList.add('show-section');
}

export default showSection;