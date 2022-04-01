import { html } from '../library/library.js';
import { notificationView } from '../notification/notification.js';
import * as memesService from '../service/memesService.js';
import { submitHandler } from '../utility/submitHandler.js';

const editTemplate = (meme, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                .value=${meme.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export const editPage = async (context) => {
    const memeId = context.params.id;

    const meme = await memesService.currentMeme(memeId);

    const onSubmit = async (date, e) => {
        const [title, description, imageUrl] = date;


        try {
            if (date.some(x => x == '')) {
                throw new Error('All fields are require!');
            }

            await memesService.editMeme(memeId, { title, description, imageUrl });

            e.target.reset();
            context.page.redirect(`/details/${memeId}`);
        } catch (err) {
            notificationView(err.message);
        }
    }

    context.render(editTemplate(meme, submitHandler(onSubmit)));
}