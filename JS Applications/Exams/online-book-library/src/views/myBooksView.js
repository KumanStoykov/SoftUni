import { html } from '../library/lib.js';
import * as booksService from '../services/bookService.js'

const cardTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl}></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>`;

const myBooksTemplate = books => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    
    ${books.length > 0
    ? html `<ul class="my-books-list">${books.map(cardTemplate)}</ul>`
    : html `<p class="no-books">No books in database!</p>`
    }
</section>`;

export const myBooksView = (context) => {
    const id = context.user.id;

    booksService.myBooks(id)
        .then(books => {

            context.render(myBooksTemplate(books));
        });

}