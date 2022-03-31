import { html, nothing } from '../library/lib.js';
import * as booksService from '../services/bookService.js';
import * as likeService from '../services/likeService.js';

const detailsTemplate = (book, onDelete, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${book.isOwner
            ? html`<a class="button" href="/edit/${book._id}">Edit</a>
            <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            : nothing
            }

            ${book.likeBtn
            ? html`<a @click=${onLike} class="button" href="/details/${book._id}">Like</a>`
            : nothing
            }

            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${book.likesCount}</span>
            </div>

        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>`;

export const detailsView = async (context) => {
    const bookId = context.params.id;
    const user = context.user;

    const [book, countOfLikes] = await Promise.all([
        booksService.getCurrentBook(bookId),
        likeService.getCountOfLikes(bookId)
    ]);
    book.likesCount = countOfLikes;

    if (user) {
        book.isOwner = book._ownerId == user.id;

        const hasLiked = await likeService.isLiked(book._id, user.id);
        //Check for liked
        book.likeBtn = (!Boolean(hasLiked) && !book.isOwner);
    }

    const onDelete = async () => {
        await booksService.deleteBook(bookId);
        context.page.redirect('/');
    }

    const onLike = async () => {
        await likeService.addLike({ bookId });
    }

    context.render(detailsTemplate(book, onDelete, onLike));
}