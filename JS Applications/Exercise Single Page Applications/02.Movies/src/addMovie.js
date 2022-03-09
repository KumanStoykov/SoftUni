import { showView } from './dom.js';
import {  showHome } from './home.js';


//Create film
const form = document.querySelector('#createFilm');
form.addEventListener('submit', onCreateFilm);

const addMovieSection = document.querySelector('#add-movie');
addMovieSection.remove();

//Show section add movie
export function showAddMovie() {
    showView(addMovieSection);
}


//Create 
async function onCreateFilm(e) {
    e.preventDefault();

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    const formData = new FormData(e.target);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageUrl');

    try {
        if (!title || !description || !img) {
            throw new Error('The input fields must be filled!');
        }
        const res = await fetch('http://localhost:3030/data/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                title,
                description,
                img
            })
        });
        if (res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }
        form.reset();
        showHome();

    } catch (err) {
        alert(err.message);
    }
}
