import { html } from '../library/library.js';
import { createGameRequest, editGame, getOneGame } from '../services/data.js';


const editTemplate = (game, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${game.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${game.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${game.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export const editView = async (context) => {
    const id = context.params.id;
    const currentGame = await getOneGame(id);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let [title, category, maxLevel, imageUrl, summary] = [...formData.values()].map(i => i.trim());

        try {
            if ([...formData.values()].some(i => i == '')) {
                throw new Error('All fields are required!');
            }
           

            await editGame(id, {title, category, maxLevel, imageUrl, summary});
            context.page.redirect(`/details/${id}`);
        } catch (err) {
            alert(err.message);
        }
    }

    context.render(editTemplate(currentGame, onSubmit));
}