import { deleteItem, getOneId } from '../api/data.js';
import { html, until } from '../library.js';
import { getUserData } from '../util.js';

const detailsTemplate = (dataPromise) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
    ${until(dataPromise, html`<p>Loading...</p>`)}
    </div>
</div>`;

const itemTemplate = (data , isOwner) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=.${data.img} />
        </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${data.make}</span></p>
    <p>Model: <span>${data.model}</span></p>
    <p>Year: <span>${data.year}</span></p>
    <p>Description: <span>${data.description}</span></p>
    <p>Price: <span>${data.price}</span></p>
    <p>Material: <span>${data.material}</span></p>
    ${html `${isOwner
            ? html `<div>
            <a href=${`/edit/${data._id}`} class="btn btn-info">Edit</a>
            <a href="/" @click=${() => onDelete(data._id)} class="btn btn-red">Delete</a>
            </div>` : ''
    }`}
</div>`


export async function detailsPage(context) { 

    context.render(detailsTemplate(loadItem(context.params.id)));
    
}

async function loadItem(id) {
    const user = getUserData();
    let isOwner = false;
    
    const data = await getOneId(id);

    if( user && user._id == data._ownerId) {
        isOwner = true
    }
 
    return itemTemplate(data, isOwner);
}

async function onDelete(id) {
    alert('DELETE!!!')
    await deleteItem(id);
}

