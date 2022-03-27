import { html } from '../library/lib.js';
import * as theaterService from '../service/theaterService.js';
import { submitHandler } from '../utility/submitHandler.js';



const editTemplate = (theater, onSubmit) => html`
    <section id="editPage">
            <form @submit=${onSubmit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" .value=${theater.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${theater.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                    .value=${theater.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea .value=${theater.description} id="description" name="description"
                        placeholder="Description">To Kill a Mockingbird is a 2018 play based on the 1960 novel of the same name by Harper Lee, adapted for the stage by Aaron Sorkin. It opened on Broadway at the Shubert Theatre on December 13, 2018. The play is set to transfer to London's West End at the Gielgud Theatre in March 2022.</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                    .value=${theater.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>`;

export const editView = async (context) => {
    const id = context.params.id;

    const theater = await theaterService.getOneEvent(id);
    console.log(theater)

    const onSubmit = async (theater, e) => {
        let [title, date, author, description, imageUrl] = theater;
        try {
            if(theater.some(x => x == '')){
                throw new Error('All fields are require!');
            }
            await theaterService.editEvents(id, {title, date, author, description, imageUrl});
            
            context.page.redirect(`/details/${id}`);
            e.target.reset();
        } catch(err) {
            alert(err.message)
        }

    }

    context.render(editTemplate(theater, submitHandler(onSubmit)));
}