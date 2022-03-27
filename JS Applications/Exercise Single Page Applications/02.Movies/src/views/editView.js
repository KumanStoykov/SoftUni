import { html } from '../library/lib.js';
import * as movieServices from '../services/movieServices.js';
import { submitHandler } from '../utility/submitHandler.js';


const editTemplate = (movie, onSubmit) => html`
<section id="edit-movie">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Movie Title" .value=${movie.title} name="title">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description" .value=${movie.description}></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" .value=${movie.img} name="img">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;


export const editView = async (context) => {
    const id = context.params.id;
    const movie = await movieServices.getDetailsMovie(id); 

    const onSubmit = async (data, e) => {
        const [title, description, img] = data;
    
       await movieServices.editMovie(context.params.id, {title, description, img});
    
       context.page.redirect(`/details/${id}`);
        e.target.reset();
    };

    context.render(editTemplate(movie, submitHandler(onSubmit)))
}

