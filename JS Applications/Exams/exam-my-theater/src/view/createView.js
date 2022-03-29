import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as theaterService from '../service/theaterService.js';



const createTemplate = (onSubmit) => html`
<section id="createPage">
    <form @submit=${onSubmit} class="create-form">
        <h1>Create Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" value="">
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year">
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description"></textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

export const createView = (context) => {

    const onSubmit = (theater, e) => {
        let [title, date, author, description, imageUrl] = theater;
        try{
            if(theater.some(x => x == '')){
                throw new Error('All fields are require!');
            }
            theaterService.createEvents({title, date, author, description, imageUrl})
            .then(() => {
                e.target.reset();
                context.page.redirect('/');
            });


        }catch(err){
            alert(err.message);
        }

    }
    context.render(createTemplate(submitHandler(onSubmit)));
}