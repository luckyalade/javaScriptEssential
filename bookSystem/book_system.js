let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function updateBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const updatedBook = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(updatedBook);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}


function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name:</strong> ${book.authorName} </p>
    <p><strong>Book Description:</strong> ${book.bookDescription}</p>
    <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>
    <button onclick="editbook(${index})">Edit</button>
    <button onclick="deletebook(${index})">Delete</button>
    ` 
).join('');
    document.getElementById('books').innerHTML = booksDiv;
};

function deletebook(index) {
    books.splice(index,1); 
    showbooks();   
}

function editbook(index) {
    const editBooks = books[index];
    document.getElementById('bookName').value = editBooks.name;
    document.getElementById('authorName').value = editBooks.authorName;
    document.getElementById('bookDescription').value = editBooks.bookDescription;
    document.getElementById('pagesNumber').value = editBooks.pagesNumber;

    books.slice(index,1);
    showbooks();
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}