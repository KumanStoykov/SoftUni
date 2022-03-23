import { html, nothing, until } from '../library/lib.js';
import { deleteCar, loadOneCar } from '../services/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (car, isOwner, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${car.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        ${isOwner && (isOwner.id == car._ownerId)
        ? html `<div class="listings-buttons">
            <a href="/edit/${car._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
        </div>`
        : nothing
        }
    </div>
</section>`;

export async function detailsView(context) {

    const id = context.params.id;
    //?????????????????????????????? need to make better
    context.render(detailsTemplate(await loadCar(id), isOwner(), onDelete));
    
    async function loadCar(id) {
        const car = await loadOneCar(id);
        return car;
    }

    function isOwner() {
        const user = getUserData();
        return user
    }

    async function onDelete() {
        await deleteCar(id);
        context.page.redirect('/allCars');
    }
}
