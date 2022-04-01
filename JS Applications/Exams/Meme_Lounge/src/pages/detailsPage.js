import { html, nothing } from '../library/library.js';
import * as memesService from '../service/memesService.js';


const detailsTemplate = (meme, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>

            ${meme.isOwner
            ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>`
            : nothing
            }
        </div>
    </div>
</section>`;

export const detailsPage = async (context) => {
    const memeId = context.params.id;
    const user = context.user;

    const meme = await memesService.currentMeme(memeId);

    if (user) {

        meme.isOwner = Boolean(meme._ownerId == user.id);
    }
    const onDelete = async () => {
        const dialogConfirm = confirm('delete!');

        if (dialogConfirm) {

            await memesService.deleteMeme(memeId);

            context.page.redirect('/allMemes');
        }
    }

    context.render(detailsTemplate(meme, onDelete));
}