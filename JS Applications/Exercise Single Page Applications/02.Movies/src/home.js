import { showAddMovie } from './addMovie.js';
import { createEl, showView } from './dom.js';
import { showMoveDetails } from './movieDetails.js';
import { navigationBar } from './nav.js';


//Cache with time to reload every 5 sec
let moviesCache = null;
let lastLoaded = null;
const maxAge = 5000;


export const homeSection = document.querySelector('#home-page');
const catalog = homeSection.querySelector('.card-deck.d-flex.justify-content-center');

homeSection.querySelector('#createLink').addEventListener('click', (e) => {
    e.preventDefault();
    showAddMovie();
});
catalog.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.tagName == 'BUTTON') {
        target = target.parentElement;
    }
    if (target.tagName == 'A') {
        const id = target.dataset.id;
        
        //Void show details
        showMoveDetails(id);
    }
});
//Remove section
homeSection.remove();

// Home view and user authorization
export async function showHome() {

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData != null) {
        homeSection.querySelector('#createLink').style.display = 'inline-block';
    } else {
        homeSection.querySelector('#createLink').style.display = 'none';
    }
    navigationBar()
    //Show home from navigation
    showView(homeSection);
    //Load film catalog
    getMovies();

}
//Get request for all films
export async function getMovies() {

    catalog.replaceChildren(createEl('p', {}, 'Loading...'));

    const now = Date.now();
    if (moviesCache == null || (lastLoaded - now) < maxAge) {

        lastLoaded = now;

        const res = await fetch('http://localhost:3030/data/movies');
        const data = await res.json();
        moviesCache = data;

        catalog.replaceChildren(...moviesCache.map(renderFilmsOnHomePage));
    }

}
//Create current film
export function renderFilmsOnHomePage(movie) {

    const film = createEl('div', { className: 'card mb-4' });

    film.innerHTML = `<img
                    class="card-img-top"
                    src="${movie.img}"
                    alt="Card image cap"
                    width="400"
                />
                <div class="card-body">
                    <h4 class="card-title">${movie.title}</h4>
                </div>
                <div class="card-footer">
                    <a data-id=${movie._id} href="#">
                    <button type="button" class="btn btn-info">Details</button>
                    </a>
                </div>`;

    return film;
}
