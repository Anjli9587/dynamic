// Sample JSON object to hold book data
let books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

// Function to display books
function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(li);
    });
}

// Function to add a new book
function addBook() {
    const titleInput = document.getElementById('bookTitle');
    const authorInput = document.getElementById('bookAuthor');

    if (titleInput.value && authorInput.value) {
        const newBook = {
            title: titleInput.value,
            author: authorInput.value
        };
        books.push(newBook);
        titleInput.value = '';
        authorInput.value = '';
        displayBooks();
    } else {
        alert('Please fill in both fields');
    }
}

// Event listener for the add button
document.getElementById('addButton').addEventListener('click', addBook);

// Initial display of books
displayBooks();
