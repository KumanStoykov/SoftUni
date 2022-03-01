const baseUri = `http://localhost:3030/jsonstore/collections/books`;

const loadBtn = document.querySelector('#loadBooks');
const tableBooks = document.querySelector('table tbody');
const form = document.querySelector('form');

const submitSaveBtn = document.querySelector('form button');
const h3Element = document.querySelector('form h3');

let currentId = '';

//Load all books
loadBtn.addEventListener('click', addAllBooks);
// Submit form
form.addEventListener('submit', formButton);
//Buttons delegation
tableBooks.addEventListener('click', buttonsDelegation);

async function buttonsDelegation(e) {
    const texBtn = e.target.textContent;
    const id = e.target.id;
    const data = await loadBookById(id);
    currentId = id;

    if (texBtn == 'Delete') {
        deleteBook(id);

    } else if (texBtn == 'Edit') {
        returnInputData(data);
    }
}
async function formButton(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button').textContent;

    if (btn == 'Submit') {
        createBook();
    } else if (btn == 'Save') {
        updateBook(currentId);
    }
}

async function addAllBooks() {
    const data = await getBooksFromDate();

    tableBooks.replaceChildren();

    Object.keys(data).forEach(b => {

        const book = createEl('tr', {},
            createEl('td', {}, data[b].title),
            createEl('td', {}, data[b].author),
            createEl('td', {},
                createEl('button', { id: b }, 'Edit'),
                createEl('button', { id: b }, 'Delete'))
        );
        tableBooks.appendChild(book);
    });
    submitSaveBtn.textContent = 'Submit';
    h3Element.textContent = 'FORM';
}

async function getBooksFromDate() {

    try {
        const response = await fetch(baseUri);

        if (response.status != 200) {
            throw new Error('Error');
        }
        const data = await response.json();

        return data;
    } catch (err) {
        alert(err.message);
    }
}

async function createBook() {
    // Form data inputs
    const dataForm = new FormData(form);
    const formValue = [...dataForm.values()];

    const checkInput = formValue.some(input => input == '');

    if (checkInput) {
        return;
    }

    try {
        const res = await fetch(baseUri, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "title": formValue[0],
                "author": formValue[1]
            })
        });
        if (res.ok == false) {
            throw new Error('Error');
        }
    } catch (err) {
        alert(err.message);
    }
    form.reset();
    addAllBooks();
}
//---------------------------------------------------------------------------------------------------------------
async function updateBook(id) {
    const dataForm = new FormData(form);

    const title = dataForm.get('title');
    const author = dataForm.get('author');

    try {
        const res = await fetch(`${baseUri}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                author
            })
        });

        if (res.ok == false) {
            throw new Error('Error');
        }
    } catch (err) {
        alert(err.message);
    }
    h3Element.textContent = 'FORM';
    submitSaveBtn.textContent = 'Submit';
    addAllBooks();
    form.reset();
}

async function loadBookById(id) {
    const res = await fetch(`${baseUri}/${id}`);
    const data = await res.json();

    return data;
}

async function returnInputData(data) {
    // Form data inputs
    const titleInput = document.querySelector('[name="title"]');
    const authorInput = document.querySelector('[name="author"]');

    const title = await data.title;
    const author = await data.author;
    titleInput.value = title;
    authorInput.value = author;

    // Change button and h3 
    h3Element.textContent = `Edit FORM`;
    submitSaveBtn.textContent = `Save`;

}
async function deleteBook(id) {

    const res = await fetch(`${baseUri}/${id}`, {
        method: 'DELETE'
    });
    const data = await res.json();

    addAllBooks();
    return data;
}

function createEl(type, attr, ...content) {
    const element = document.createElement(type);

    for (let item in attr) {
        if (item == 'class') {
            element.classList.add(attr[item]);
        } else {
            element[item] = attr[item];
        }
    }
    content.forEach(item => {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    });
    return element;
}