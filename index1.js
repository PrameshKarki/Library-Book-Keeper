//Implementing using ES6 Classs
class library {
  constructor(bookName, authorName, category) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.category = category;
  }
}
class Display {
  add(book) {
    let tableBody = document.getElementById("tableContent");
    let templateString = `
                          <tr>
                          <td>${book.bookName}</td>
                          <td>${book.authorName}</td>
                          <td>${book.category}</td>
                          </tr>`;
    tableBody.innerHTML += templateString;
  }
  clear() {
    let myForm = document.getElementById("libraryForm");
    myForm.reset();
  }
  validation(book) {
    if (book.bookName.length < 3 && book.authorName.length < 4) return false;
    else return true;
  }
  show(type, message) {
    let myMessageDiv = document.getElementById("message");
    myMessageDiv.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message!</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
    setTimeout(() => {
      myMessageDiv.innerHTML = "";
    }, 3000);
  }
}
let display = new Display();
let myForm = document.getElementById("libraryForm");
myForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let bookName = document.getElementById("bookName").value;
  let authorName = document.getElementById("authorName").value;
  let programmingBooks = document.getElementById("programmingBooks");
  let history = document.getElementById("history");
  let other = document.getElementById("other");

  if (programmingBooks.checked) category = programmingBooks.value;
  else if (history.checked) category = history.value;
  else if (other.checked) category = other.value;

  let book = new library(bookName, authorName, category);

  if (display.validation(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Your Book has been sucessfully added");
  } else {
    display.show("danger", "This book cannt Be added");
  }
}
