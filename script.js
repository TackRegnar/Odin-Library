window.myLibrary = [];

function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  myLibrary.push(new book(title, author, pages));
}

function createBookCard() {
  let book_cards = document.getElementById("bc"); 

  myLibrary.forEach( (ele) => {
    let card = document.createElement("div");
    let book_title = document.createElement("p");
    let book_author = document.createElement("p");
    let book_pages = document.createElement("p");
    let read_button = document.createElement("button");
    let delete_button = document.createElement("button");

    card.setAttribute("class", "card");
    book_cards.appendChild(card);



    card.appendChild(book_title);
    card.appendChild(book_author);
    card.appendChild(book_pages);
    card.appendChild(read_button);
    card.appendChild(delete_button);

    book_title.textContent = '"' + ele.title + '"';
    book_author.textContent = ele.author;
    book_pages.textContent = ele.pages;
    read_button.textContent = "Read";
    delete_button.textContent = "Delete";
  });
}

addBookToLibrary("test", "bob", 12);
addBookToLibrary("test2", "jess", 13);

createBookCard();
