import { html, nothing } from '../library/library.js';
import { deleteGame, getAllComments, getOneGame } from '../services/data.js';
import { commentFormView } from './commentsFormView.js';
import { commentView } from './commentsView.js';

const detailsTemplate = (game, isOwner, isLogged, deleteHandler, comments, commentFormView) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>
        <p class="text">${game.summary}</p>

       ${commentView(comments)}

        ${isOwner
         ? buttonsTemplate(game._id, deleteHandler)
         : nothing
        }
    </div>

    ${!isOwner && isLogged
        ? commentFormView
        : nothing
    }

</section>`;

const buttonsTemplate = (id, deleteHandler) => html`
<div class="buttons">
    <a href="/edit/${id}" class="button">Edit</a>
    <a @click=${deleteHandler} href="javascript:void(0)" class="button">Delete</a>
</div>`;

export const detailsView = async (context) => {


    const isLogged = Boolean(context.user)

    const [currentGame, allComments] = await Promise.all([

        getOneGame(context.params.id),
        getAllComments(context.params.id),
    ]);

    const ownerId = currentGame._ownerId;

    const isOwner = context.user && (context.user.id == ownerId);

    const deleteHandler = async () => {
        await deleteGame(currentGame._id);

        context.page.redirect('/');
    }

    context.render(detailsTemplate(currentGame, isOwner, isLogged, deleteHandler, allComments, commentFormView(currentGame, context)));
}



