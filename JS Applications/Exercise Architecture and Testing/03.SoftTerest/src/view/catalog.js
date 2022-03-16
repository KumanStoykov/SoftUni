import { getAllIdeas } from "../api/data.js";

const catalogPage = document.getElementById('dashboard-holder');

let cxt = null;

export async function showCatalog(context) {
    cxt = context;

    context.showSection(catalogPage);

    const ideas = await getAllIdeas();

    if (ideas.length == 0) {
        catalogPage.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
    } else {
        catalogPage.replaceChildren(...ideas.map(createIdeaPreview));
    }
}

export function createIdeaPreview(idea) {
    const element = document.createElement('div');
    element.className = 'card overflow-hidden current-card details';
    element.style.width = '20rem';
    element.style.height = '18rem';
    element.innerHTML = `<div class="card-body">
    <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a class="btn" href="" data-id="${idea._id}">Details</a>
    </div>`
    return element;
}

catalogPage.addEventListener('click', onDetails);

export function onDetails(e) {
    
    if (e.target.tagName == 'A') {
        e.preventDefault();

        const id = e.target.dataset.id;
        
        cxt.nextView('/details', id);
    }
}

