import { html } from '../library/library.js';
import { postComments } from '../services/data.js';



const commentFormTemplate = (commentsHandler, currentGame, context) => html`
<article class="create-comment">
<label>Add new comment:</label>
<form @submit=${(e) => commentsHandler(e, currentGame, context)} class="form">
    <textarea name="comment" placeholder="Comment......"></textarea>
    <input class="btn submit" type="submit" value="Add Comment">
</form>
</article>`;

const commentsHandler = async (e, currentGame, context) => {
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

export const commentFormView = (currentGame, context) => {
   return commentFormTemplate(commentsHandler, currentGame, context);
}