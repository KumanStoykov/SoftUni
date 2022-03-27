import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as movieServices from '../services/movieServices.js';


const createTemplate = (onSubmit) => html`
<section id="add-movie">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Description" name="description"></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" value="">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;

export const createView = (context) => {

    const onSubmit = (data, e) => {

        const [title, description, img] = data;

        try{
            if(!title || !description || !img) {
                throw new Error('All fields are require!');
            }

        }catch(err){
            alert(err.message);
        }
        movieServices.createMovie({title, description, img})
        .then(() => {
            e.target.reset();
            context.page.redirect('/');
        });
    }
    context.render(createTemplate(submitHandler(onSubmit)));
}  