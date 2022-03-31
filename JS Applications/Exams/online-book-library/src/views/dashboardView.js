import { html } from '../library/lib.js';
import * as booksService from '../services/bookService.js'

const cardTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`;

const dashboardTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    ${books.length > 0
    ? html `<ul class="other-books-list">${books.map(cardTemplate)}</ul>`
    : html `<p class="no-books">No books in database!</p>`
    }    
</section>`;

export const dashboardView = (context) => {
    booksService.getAllBooks()
    .then(books => {
        
        context.render(dashboardTemplate(books));
    });
}