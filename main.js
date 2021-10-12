//jshint esversion:6

// search bar

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener("keyup", function(e) {
  const term = e.target.value.toLowerCase();
  const books = document.getElementsByTagName('h4');
  Array.from(books).forEach(function(book) {
    const title = book.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.parentElement.parentElement.style.display = 'flex';
    } else {
      book.parentElement.parentElement.style.display = 'none'
    }
  });
});
