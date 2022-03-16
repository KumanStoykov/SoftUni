import { deleteIdeas, detailsIdeas } from "../api/data.js";

const detailsPage = document.getElementById('detailsPage');

let cxt = null;

export async function showDetails(context, id) {

    cxt = context;
    const currentIdeas = await detailsIdeas(id);


    context.showSection(createDetails(currentIdeas));
}

function createDetails(idea) {

    const div = document.createElement('div');
    div.id = 'detailsPage';
    div.className = 'container home some';

    const userData = JSON.parse(localStorage.getItem('userData'));

    div.innerHTML = `<img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>`;

    const divButtonWarper = document.createElement('div');
    divButtonWarper.className = 'text-center';

    const deleteBtn = document.createElement('a');
    deleteBtn.classList = 'btn detb';
    deleteBtn.href = '';
    deleteBtn.textContent = 'Delete';
    divButtonWarper.appendChild(deleteBtn);

    if ( userData && userData._id == idea._ownerId) {
        div.appendChild(divButtonWarper);

        deleteBtn.addEventListener('click', onDelete.bind(null, idea._id));
    }

    return div;
}

async function onDelete(id, e) {
    e.preventDefault();
    await deleteIdeas(id);
    cxt.nextView('/catalog');
}

