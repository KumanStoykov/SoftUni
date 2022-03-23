import { html } from '../library/lib.js';
import { createCar } from '../services/data.js';


const createTemplate = (context) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onSubmit.bind(null, context)} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`;

export async function createView(context) {
    context.render(createTemplate(context));
}

async function onSubmit(context, e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    let [brand, model, description, year, imageUrl, price] = [...formData.values()].map(i => i.trim());
    year = Number(year);
    price = Number(price);

    try{
        if([...formData.values()].some(i => i == '')){
            throw new Error('All fields are require!');
        }
        if(year < 0 || price < 0) {
            throw new Error('Year and price are required positive numbers!');
        }

       const car =  await createCar({ brand, model, description, year, imageUrl, price});
       
        e.target.reset();
        context.page.redirect('/allCars');
    } catch(err) {
        alert(err.message);
    }

}

