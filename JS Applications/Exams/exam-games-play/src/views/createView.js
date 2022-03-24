import { html } from '../library/library.js';
import { createGameRequest } from '../services/data.js';

const createTemplate = (onSubmit) => html`
<section id="create-page" class="auth">
    <form @submit=${onSubmit} id="create">
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>
</section>`;

export const createView = async (context) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let [title, category, maxLevel, imageUrl, summary] = [...formData.values()].map(i => i.trim());

        try {
            if ([...formData.values()].some(i => i == '')) {
                throw new Error('All fields are required!');
            }
           

            await createGameRequest({title, category, maxLevel, imageUrl, summary});
            context.page.redirect('/');
        } catch (err) {
            alert(err.message);
        }
    }

    
    context.render(createTemplate(onSubmit));

}