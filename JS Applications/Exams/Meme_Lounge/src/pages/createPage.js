import { html } from '../library/library.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as memesService from '../service/memesService.js';
import { notificationView } from '../notification/notification.js';

const createTemplate = (onSubmit) => html`
<section id="create-meme">
    <form @submit=${onSubmit} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

export const createPage = (context) => {

    const onSubmit = (date, e) => {
        const [title, description, imageUrl] = date;


        try {
            if (date.some(x => x == '')) {
                throw new Error('All fields are require!');
            }

            memesService.createMeme({ title, description, imageUrl })
                .then(() => {
                    e.target.reset();
                    context.page.redirect('/allMemes');
                });

        } catch (err) {
            notificationView(err.message);
        }
    }

    context.render(createTemplate(submitHandler(onSubmit)));
}