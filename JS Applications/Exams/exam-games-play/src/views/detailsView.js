import { html, nothing } from '../library/library.js';
import { deleteGame, getAllComments, getOneGame, postComments } from '../services/data.js';

const detailsTemplate = (game, isOwner, isLogged, deleteHandler, comments, commentsHandler) => html`
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

        <div class="details-comments">
            <h2>Comments:</h2>
            ${comments.length == 0
            ? html`<p class="no-comment">No comments.</p>`
            : html`<ul>
                    ${comments.map(listAllCommentsTemplate)}
                  </ul>`
            }

        </div>

        ${isOwner
         ? buttonsTemplate(game._id, deleteHandler)
         : nothing
        }
    </div>

    ${!isOwner && isLogged
        ? commentFormTemplate(commentsHandler)
        : nothing
    }

</section>`;


const commentFormTemplate = (commentsHandler) => html`
<article class="create-comment">
<label>Add new comment:</label>
<form @submit=${commentsHandler} class="form">
    <textarea name="comment" placeholder="Comment......"></textarea>
    <input class="btn submit" type="submit" value="Add Comment">
</form>
</article>`;


const listAllCommentsTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;

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

    //Comments-------------------------------------------------------------

    const commentsHandler = async (e) => {
        e.preventDefault();

        const formDate = new FormData(e.target);
        const comment = formDate.get('comment').trim();
        
        if(comment == '') {
            return;
        }       
            postComments({
                gameId: currentGame._id,
                comment
            });
                    
        e.target.reset();      
               
        context.page.redirect(`/details/${currentGame._id}`);
    }
    context.render(detailsTemplate(currentGame, isOwner, isLogged, deleteHandler, allComments, commentsHandler));
}



