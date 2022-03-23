import { html } from '../library/lib.js';
import { editCar, loadOneCar } from '../services/data.js';

const editTemplate = (context, id, car) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit.bind(null, context, id)} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value=${car.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value=${car.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value=${car.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value=${car.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${car.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value=${car.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export async function editView(context) {
    const currentId = context.params.id;
    const currentCar = await loadOneCar(currentId)
    context.render(editTemplate(context, currentId, currentCar));
}

async function onSubmit(context, id, e) {
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
        await editCar(id, { brand, model, description, year, imageUrl, price});
        e.target.reset();
        context.page.redirect('/allCars');
    } catch(err) {
        alert(err.message);
    }

}
