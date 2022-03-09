import { makeDeleteRequest } from './deleteMovie.js';
import { createEl, showView } from './dom.js';
import { showEditMovie } from './editMovie.js';

const moveExampleSection = document.querySelector('#movie-example');
moveExampleSection.remove();

export async function showMoveDetails(id) {

  showView(moveExampleSection);
  getMovie(id);
}

export async function getMovie(id) {
  moveExampleSection.replaceChildren(createEl('p', {}, 'Loading...'));
  try {
    const request = [
      fetch(`http://localhost:3030/data/movies/` + id),
      fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`),
    ];

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
      request.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`));
    }
    const [movieRes, likesRes, hasLikedRes] = await Promise.all(request);


    if (movieRes.status != 200 || likesRes.status != 200) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const [moviesData, likesData, hasLikedData] = await Promise.all([
      movieRes.json(),
      likesRes.json(),
      hasLikedRes && hasLikedRes.json()
    ]);
    //Replace with current Authorization user
    moveExampleSection.replaceChildren(currentDetailsFilm(moviesData, likesData, hasLikedData));
    //Edit button handel
    onEdit();
    //Delete movie
    onDelete(id);

  } catch (err) {
    alert(err.message);
  }

}

function currentDetailsFilm(moviesData, likesData, hasLikedData) {

  const userData = JSON.parse(sessionStorage.getItem('userData'));


  const movie =
    createEl('div', { className: 'container' },
      createEl('div', { className: 'row bg-light text-dark' },
        createEl('h1', {}, `Movie title: ${moviesData.title}`),
        createEl('div', { className: 'col-md-8' },
          createEl('img', { className: 'img-thumbnail', src: moviesData.img, alt: 'Movie' })),
        createEl('div', { className: 'col-md-4 text-center', id: 'allBtn' },
          createEl('h3', { className: 'my-3' }, 'Movie Description'),
          createEl('p', {}, moviesData.description)))
    );

  if (userData != null) {
    if (userData.id == moviesData._ownerId) {
      movie.querySelector('#allBtn').appendChild(createEl('a', { className: 'btn btn-danger deleteBtn', id: moviesData._id, href: '#' }, 'Delete'));
      movie.querySelector('#allBtn').appendChild(createEl('a', { className: 'btn btn-warning editBtn', id: moviesData._id, href: '#' }, 'Edit'));
    } else {
      if (hasLikedData.length > 0) {
        movie.querySelector('#allBtn').appendChild((createEl('a', { className: 'btn btn-primary', id: 'unlikeBtn', href: '#' }, 'Unlike')));
        movie.querySelector('#unlikeBtn').addEventListener('click', onUnlike);
      } else {
        movie.querySelector('#allBtn').appendChild((createEl('a', { className: 'btn btn-primary', id: 'likeBtn', href: '#' }, 'Like')));
        movie.querySelector('#likeBtn').addEventListener('click', onLike);
      }
    }
  }
  movie.querySelector('#allBtn').appendChild(createEl('span', { className: 'enrolled-span' }, `Liked: ${likesData}`));

  return movie;

  async function onLike() {

    await fetch('http://localhost:3030/data/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': userData.token
      },
      body: JSON.stringify({
        movieId: moviesData._id
      })
    });
    showMoveDetails(moviesData._id);
  }
  async function onUnlike() {
    const likeId = hasLikedData[0]._id;

    await fetch('http://localhost:3030/data/likes/' + likeId, {
      method: 'DELETE',
      headers: {
        'X-Authorization': userData.token
      },
    });
    showMoveDetails(moviesData._id);
  }
}
// Edit button function-------------------------------------------------------------------------------------------------
function onEdit() {
  const editBtn = moveExampleSection.querySelector('.editBtn');
  if (editBtn) {

    moveExampleSection.querySelector('.editBtn').addEventListener('click', (e) => {
      e.preventDefault();
      showEditMovie(e.target.id);
    });
  }
}
//Delete button function---------------------------------------------------------------------------------------------------

function onDelete(id) {
  const deleteBtn = moveExampleSection.querySelector('.deleteBtn');
  if(deleteBtn) {
    deleteBtn.addEventListener('click',makeDeleteRequest.bind(null, id));    
  }
}