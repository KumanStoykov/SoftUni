import { html, nothing } from '../library/lib.js';
import * as movieServices from '../services/movieServices.js';
import * as likesService from '../services/likesServices.js';
import { likeFunctions } from '../functions/likeFunctions.js';


const detailsTemplate = (movie, isOwner, user, onDelete, likes, likeButtonsFunction) => html`
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src=${movie.img}
                    alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${movie.description}</p>

                ${isOwner 
                ? html `
                <a @click=${onDelete} class="btn btn-danger" href="javascript:void(0)">Delete</a>
                <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>`
                : nothing
                }

                ${user && (!isOwner)
                ? likeButtonsFunction
                : nothing    
                }            
                <span class="enrolled-span">Liked ${likes}</span>
                
            </div>
        </div>
    </div>
</section>`;

export const detailsView = async (context) => {
    const id = context.params.id;
    const user = context.user;
    
   const [movie, likes, isLiked] = await Promise.all([
       movieServices.getDetailsMovie(id),
       likesService.getNumbersOfLikes(id),
       likesService.getLikesFromUser(id, user?.id)
    ]);
    const isLikedId = isLiked[0]?._id;
    const hasLiked = isLiked[0]?.movieId == id;

   const isOwner = (context.user?.id) == movie._ownerId;

   const onDelete = async () => {
       const dialog = confirm('Delete!');
       if(dialog) {
           await movieServices.deleteMovie(id);
           context.page.redirect('/');
       }
    }

    const likeButtonsFunction = likeFunctions(hasLiked, isLikedId, context);

     
    context.render(detailsTemplate(movie, isOwner, user, onDelete, likes, likeButtonsFunction));
}