import { html } from '../library/lib.js';
import { getMyCars } from '../services/data.js';
import { getUserData } from '../util.js';

const allMyCarsTemplate = (cars, count) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
    
       ${ count == 0 
        ? html `<p class="no-cars">You haven\'t listed any cars yet.</p>` 
        : cars.map(myCarTemplate)
        }      
        
    </div>
</section>`;

const myCarTemplate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;

export async function myCarsView(context) {
    const userId = getUserData().id;
    const myCars = await getMyCars(userId);
    const count = myCars.length

    context.render(allMyCarsTemplate(myCars, count));
}