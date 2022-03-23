import { html, nothing } from '../library/lib.js';
import { getAllCars, searchRequest } from '../services/data.js';


const searchTemplate = (searchHandler, cars, allCarsTemplate) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${searchHandler}} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    ${cars 
    ? carsOrNoResultTemplate(cars, allCarsTemplate)
    : nothing }   
    
</section>`;

const carsOrNoResultTemplate = (carsRequest, allCarsTemplate) => html`
<div class="listings">
${carsRequest.length == 0
? html`<p class="no-cars"> No results.</p>`
: carsRequest.map(allCarsTemplate)
}
</div>}`;

const carTemplate = (car) => html`
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
    </div>`;


export async function searchView(context) {

    const searchHandler = async () => {
        const searchInput = document.querySelector('#search-input');
        let cars;

        if(searchInput.value) {
            cars = await searchRequest((searchInput.value).trim());
        }  else {
            cars = await getAllCars();
        }
        searchInput.value = '';

        context.render(searchTemplate(searchHandler, cars, carTemplate));
    };
    
    context.render(searchTemplate(searchHandler, carTemplate));
}