import { showView } from './dom.js';
import { showMoveDetails } from './movieDetails.js';

const editMovieSection = document.querySelector('#edit-movie');
editMovieSection.remove();

const form = editMovieSection.querySelector('#editMovieForm');
form.addEventListener('submit', putRequest);



let currentId = null;


export function showEditMovie(id) {
    currentId = id;

    showView(editMovieSection);

    fillingInputFields(id);
}

async function getMoveForEdit(id) {

    try {
        const res = await fetch(`http://localhost:3030/data/movies/${id}`);
        if (res.ok == false) {
            const error = res.json();
            throw new Error(error.message);
        }
        const data = await res.json();
        return data

    } catch (err) {
        alert(err.message);
    }
}
async function fillingInputFields(id) {

    const movie = await getMoveForEdit(id);


    const titleInput = editMovieSection.querySelector('#title');
    const descriptionInput = editMovieSection.querySelector('#description');
    const imageInput = editMovieSection.querySelector('#image');

    titleInput.value = movie.title;
    descriptionInput.value = movie.description;
    imageInput.value = movie.img;
}

async function putRequest(e) {
    e.preventDefault();
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const formData = new FormData(e.target);
    const { title, description, imageUrl } = Object.fromEntries(formData);

    try {
        const res = await fetch(`http://localhost:3030/data/movies/${currentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                title,
                description,
                img: imageUrl
            })
        });
        if (res.ok == false) {
            const error = res.json();
            throw new Error(error.message);
        }
        
        showMoveDetails(currentId)

    } catch (err) {
        alert(err.message);
    }
}



