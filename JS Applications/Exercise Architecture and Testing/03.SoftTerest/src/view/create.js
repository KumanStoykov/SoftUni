import { createIdeasRequest } from "../api/data.js";
import { createIdeaPreview } from "./catalog.js";

const createPage = document.getElementById('createPage');

let cxt = null;

export function showCreate(context) {
    cxt = context;
    context.showSection(createPage);
}

const form = createPage.querySelector('.form-idea');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const  description = formData.get('description');
    const img = formData.get('imageURL');

    if(title.length < 6 || description.length < 10 || img.length < 5) {
        return alert('Invalid title/description/image');
    }

    const idea = createIdeasRequest({title, description, img});

    form.reset();

    createIdeaPreview(idea);

    cxt.nextView('/catalog');
}