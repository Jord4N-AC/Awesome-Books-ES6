// Show "✅ Add successfully" message after adding a book, hide it after 1.4s using setTimeout()
// Add a class to the recent added book

const hideSuccessMessage = (successMessage) => {
  setTimeout(() => { successMessage.style.display = 'none'; }, 1400);
};

const showSuccessMessage = (
  oldLength, newLegth, bookList, successMessage,
) => {
  if (newLegth > oldLength) {
    successMessage.style.display = 'initial';
    hideSuccessMessage(successMessage);

    bookList.children[newLegth - 1].classList.add('recent-added');
  }
};

export default showSuccessMessage;
