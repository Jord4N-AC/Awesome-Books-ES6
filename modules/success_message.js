// Show "✅ Add successfully" message after adding a book, hide it after 1.4s using setTimeout()
// Add a class to the recent added book

export default function showHideSuccessMessage(
    oldLength, newLegth, bookList, successMessage
    ) {
    if(newLegth > oldLength) {
        successMessage.style.display = 'initial';
        setTimeout(() => { successMessage.style.display = 'none'; }, 1400);

        bookList.children[newLegth - 1].classList.add('recent-added');
    } else {
        successMessage.style.display = 'none';
    }
}
