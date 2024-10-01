const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

// Function to toggle the read status
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}

function displayBooks() {
    const bookContainer = document.querySelector(".display-books");
    bookContainer.innerHTML = ""; // Clear previous entries

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
        `;

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Book";
        removeBtn.onclick = () => {
            myLibrary.splice(index, 1);
            displayBooks(); // Refresh the display
        };
        bookCard.appendChild(removeBtn);

        // Toggle read status button
        const toggleReadBtn = document.createElement("button");
        toggleReadBtn.textContent = "Toggle Read Status";
        toggleReadBtn.onclick = () => {
            book.toggleReadStatus();
            displayBooks(); // Refresh the display
        };
        bookCard.appendChild(toggleReadBtn);

        // Append the book card to the container
        bookContainer.appendChild(bookCard);
    });
}

// Handle new submission form
document.querySelector("#library-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const page = document.querySelector("#pages").value;
    const read = document.querySelector("#completed").checked;

    const newBook = new Book(title, author, page, read); // Ensure correct order
    addBookToLibrary(newBook);

    // Clear form after submission
    document.querySelector("#library-form").reset();
    document.querySelector("#library-form").style.display = "none";
});

// Toggle form visibility
const addNewBookBtn = document.querySelector("#new-book-btn");

addNewBookBtn.addEventListener("click", () => {
    const toggleForm = document.querySelector("#library-form");
    if (toggleForm.style.display == "none") {
        toggleForm.style.display = "block";
    } else {
        toggleForm.style.display = "none";
    }
});
