import { html } from '../library/library.js';
import * as memesService from '../service/memesService.js';

const memeTEmplate = (meme) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>`;

const allMemesTemplate = (memes) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">

        ${memes.length > 0
        ? memes.map(memeTEmplate)
        : html`<p class="no-memes">No memes in database.</p>`
    }
    </div>
</section>`;

export const allMemesPage = (context) => {

    memesService.getAllMemes()
        .then(memes => {

            context.render(allMemesTemplate(memes));
        });
}