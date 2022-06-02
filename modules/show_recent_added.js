let recentChecked;

// Scroll to show recent added books and highlights them when clicking link1
function scrollShowRecentAdded(allRecent = document.querySelectorAll('.recent-added')) {
  if (allRecent[0]) {
    setTimeout(() => { allRecent[0].scrollIntoView(); }, 900);

    setTimeout(() => {
      allRecent.forEach((recent) => {
        recent.classList.toggle('highlight-recent');
      });
    }, 1200);

    setTimeout(() => {
      allRecent.forEach((recent) => {
        recent.classList.toggle('highlight-recent');
      });
    }, 1500);

    recentChecked = true;
  }
}

// Remove recent added style when clicking link2 or link2
function removeRecentAddedStyle(allRecent = document.querySelectorAll('.recent-added')) {
  if (allRecent.length > 0) {
    allRecent.forEach((recent) => {
      recent.classList.remove('recent-added');
    });
    recentChecked = false;
  }
}

// Checks window.location.hash and executes either of functions above
export default function showRecentAdded(
  navLinks, inputTitle,
  hash = window.location.hash,
) {
  if (hash === navLinks[0].getAttribute('href')) {
    scrollShowRecentAdded();
  } else if (hash !== navLinks[0].getAttribute('href')
    && recentChecked) {
    removeRecentAddedStyle();
  }
  if (hash === navLinks[1].getAttribute('href')) {
    inputTitle.focus();
  }
}
