function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();  
    this.haveRead = haveRead;

};

Book.prototype.toggleRead = function() {
    if (this.haveRead === 'yes') {
        this.haveRead = 'no'
    }
    else this.haveRead = 'yes'
};

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead);
    myLibrary.push(newBook);
};

const myLibrary = [];

function displayLibrary() {
    // Clears cards from #library-list container so cards do not reprint
    const libraryGrid = document.getElementById('library-list');
    libraryGrid.innerHTML = '';

    //For Each loop that will iterate through myLibrary[] to create a card for each book
    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('card');
        bookDiv.dataset.id = book.id;

        const h3Title = document.createElement('h3');
        h3Title.classList.add('title');
        h3Title.textContent = book.title;
        bookDiv.appendChild(h3Title);

        const pAuthor = document.createElement('p');
        pAuthor.textContent = `By: ${book.author}`;
        bookDiv.appendChild(pAuthor);

        const pPages = document.createElement('p');
        pPages.textContent = `${book.pages} pages`;
        bookDiv.appendChild(pPages);

        const pHaveRead = document.createElement('p');
        pHaveRead.textContent = `Have Read: ${book.haveRead}`;
        bookDiv.appendChild(pHaveRead);

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.classList.add('btn');
        toggleReadBtn.textContent = `Change read status`;
        toggleReadBtn.addEventListener('click', () => {
            book.toggleRead();
            displayLibrary();
        });
        bookDiv.appendChild(toggleReadBtn);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn');
        removeBtn.textContent = `Remove book`;
        removeBtn.addEventListener('click', () => {
            const targetIndex = myLibrary.findIndex(b => b.id === book.id);
            myLibrary.splice(targetIndex, 1);
            displayLibrary();
        });
        bookDiv.appendChild(removeBtn);


        libraryGrid.appendChild(bookDiv);
    });
};

// Will create a form to add a new book to the library.
const addBookButton = document.getElementById('addBookButton');
addBookButton.addEventListener('click', () => {

    if (document.querySelector('.form-container')) {
        return; // Prevent multiple forms from being created
    }


    const newdiv = document.createElement('div');
    newdiv.classList.add("form-container");

    const form = document.createElement('form');
    form.id = "add-book-form";

    //Form inputs for title, author, pages, and haveRead.
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.placeholder = 'Title';
    form.appendChild(titleInput);

    const authorInput = document.createElement('input');
    authorInput.type = 'text';
    authorInput.placeholder = 'Author';
    form.appendChild(authorInput);

    const pagesInput = document.createElement('input');
    pagesInput.type = 'number';
    pagesInput.placeholder = 'Number of Pages';
    form.appendChild(pagesInput);

    const haveReadLabel = document.createElement('span');
    haveReadLabel.textContent = 'Have You Read This Book? ';
    form.appendChild(haveReadLabel);

    //Yes Radio Group
    const haveReadYesLabel = document.createElement('label');    
    const haveReadInput = document.createElement('input');
    haveReadInput.type = 'radio';
    haveReadInput.name = 'haveRead';
    haveReadInput.value = 'yes';

    haveReadYesLabel.appendChild(haveReadInput);
    haveReadYesLabel.appendChild(document.createTextNode(' Yes '));
    form.appendChild(haveReadYesLabel);

    //No Radio Group
    const haveReadNoLabel = document.createElement('label');
    const haveReadNoInput = document.createElement('input');
    haveReadNoInput.type = 'radio';
    haveReadNoInput.name = 'haveRead';
    haveReadNoInput.value = 'no';

    haveReadNoLabel.appendChild(haveReadNoInput);
    haveReadNoLabel.appendChild(document.createTextNode(' No '));
    form.appendChild(haveReadNoLabel);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    // Submit details to addBookToLibrary function and remove form from page.
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        const title = titleInput.value;
        const author = authorInput.value;
        const pages = pagesInput.value;
        const haveRead = haveReadInput.checked ? 'yes' : 'no';
        
        addBookToLibrary(title, author, pages, haveRead);
        displayLibrary();
        newdiv.remove(); // Remove the form after submission
    });
    form.appendChild(submitButton);

    //Cancel button to remove the form from the page.
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
        newdiv.remove();
    });
    form.appendChild(cancelButton);

    newdiv.appendChild(form);
    const sidebar = document.getElementById('sidebar');
    sidebar.appendChild(newdiv);
});