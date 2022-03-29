import { html } from '../library/library.js';
import { getAllGames } from '../services/data.js';


const catalogTemplate = (games) => html`
<section id="catalog-page">
    <h1>All Games</h1>
    
    ${games.length != 0
     ? games.map(gameTemplate)
     : html `<h3 class="no-articles">No articles yet</h3>`     
    }
</section>`;

const gameTemplate = (game) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${game.imageUrl}>
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href="/details/${game._id}" class="details-button">Details</a>
    </div>
</div>`;

export const catalogView = async (context) => {
    
    const allGames = await getAllGames();

    context.render(catalogTemplate(allGames));
} 