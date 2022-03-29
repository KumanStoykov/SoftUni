import { html } from '../library/library.js';



const commentsViewTemplate = (comments) => html`
<div class="details-comments">
    <h2>Comments:</h2>
    ${comments.length == 0
            ? html`<p class="no-comment">No comments.</p>`
            : html`<ul>
        ${comments.map(listAllCommentsTemplate)}
    </ul>`
        }
</div>`;

const listAllCommentsTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;

export const commentView = (comments) => {
    return commentsViewTemplate(comments);
}
