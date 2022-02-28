const baseUri = `http://localhost:3030/jsonstore/collections/books`;

const loadBtn = document.querySelector('#loadBooks');
const tableBooks = document.querySelector('table tbody')

loadBtn.addEventListener('click', addAllBooks);

async function addAllBooks() {
    const data = await getBooks();

   Object.keys(data).forEach(b => {

        const book = createEl('tr', {},
            createEl('td', {}, data[b].title),
            createEl('td', {}, data[b].title),
            createEl('td', {},
            createEl('button', {id: b}, 'Edit'),
            createEl('button', {id: b}, 'Delete'))    
        );
        tableBooks.appendChild(book);
    });


}

async function getBooks() {
    try {
        const response = await fetch(baseUri);

        if(response.status != 200) {
            throw new Error('Error');
        }
        const data = await response.json();
        return data;
    }catch(err) {
        alert(err.message);
    }
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