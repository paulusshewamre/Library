library = [
    { id: 1, title: "1984", author: "George Orwell", read: false },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", read: true },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", read: false },
]

function displayBooks() {
    bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    library.forEach(book => {
        const div = document.createElement("div");
        div.className = "book";
        div.innerHTML = `
            <strong>${book.title}</strong> by ${book.author}
            <span>${book.read ? "--read--" : "--not read--"}</span>
            <button onclick="deleteBook(${book.id})">Delete</button>
            <button onclick="readBook(${book.id})">${book.read ? "Not read" : "read"}</button>
        `;
        bookList.appendChild(div);
    });
}

function addBook(){
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    read = document.getElementById("read").checked;
    if (title && author) {
        const newBook = {
            id: library.length + 1,
            title: title,
            author: author,
            read: read
        }
        library.push(newBook);
        displayBooks();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("read").checked = false;
    }else{
        alert("Please fill in all fields.");
    }
    
}

function deleteBook(id){
    library = library.filter(book => book.id !== id);
    displayBooks();
}

function readBook(id) {
    const book = library.find(book => book.id === id);
    if(book) {
        book.read = !book.read;
        displayBooks();
    }
}

document.addEventListener("DOMContentLoaded", displayBooks);