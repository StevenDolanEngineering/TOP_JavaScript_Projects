function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
};

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead);
    myLibrary.push(newBook);
};

const myLibrary = [];


const addBookButton = document.getElementById('addBookButton');
addBookButton.addEventListener('click', () => {

    if (document.querySelector('.form-container')) {
        return; // Prevent multiple forms from being created
    }

    // Will create a form to add a new book to the library.
    const newdiv = document.createElement('div');
    newdiv.classList.add("form-container");

    const form = document.createElement('form');
    form.id = "add-book-form";

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
    submitButton.textContent = 'Add Book';
    form.appendChild(submitButton);

    newdiv.appendChild(form);
    document.body.appendChild(newdiv);
});