import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as booksService from '../services/bookService.js';

const editTemplate = (onSubmit, book) => html`
<section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value=${book.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description" .value=${book.description}></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${book.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`;

export const editView = async (context) => {
    const id = context.params.id;
    const book = await booksService.getCurrentBook(id);

    const onSubmit = (data, e) => {

        const [title, description, imageUrl, type] = data;

        try {
            if (!title || !description || !imageUrl) {
                throw new Error('All fields are require!');
            }
            booksService.editBook(id, { title, description, imageUrl, type })
                .then(() => {
                    e.target.reset();

                    context.page.redirect( `/details/${id}`);
                });

        } catch (err) {
            alert(err.message);
        }
    }

    context.render(editTemplate(submitHandler(onSubmit), book));
}