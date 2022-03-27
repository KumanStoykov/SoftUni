import { html, nothing } from '../library/lib.js';
import * as theaterService from '../service/theaterService.js';
import * as likesService from '../service/likesService.js';



const detailsTemplate = (theater, isOwner, isLogged, id, onDelete, countOfLikes, onLike, hasLiked) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${theater.title}</h1>
            <div>
                <img src=${theater.imageUrl} />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${theater.description}</p>
            <h4>Date: ${theater.date}</h4>
            <h4>Author: ${theater.author}</h4>
            <div class="buttons">
                ${isLogged && isOwner
                ? html `<a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                        <a class="btn-edit" href="/edit/${id}">Edit</a>`
                : nothing
                }                
                   
                ${(isLogged && !isOwner) && !hasLiked
                ? html `<a @click=${onLike} class="btn-like" href=${`/details/${id}`}>Like</a>`                               
                : nothing                
                }
            </div>
            <p class="likes">Likes: ${countOfLikes}</p>
        </div>
    </div>
</section>`;


export const detailsView = async (context) => {
    const id = context.params.id;
    const user = context.user;
    
     

    const [theater, countOfLikes, isLiked] = await Promise.all([
        theaterService.getOneEvent(id),
        likesService.getCountLikes(id),
        likesService.getLikesFromUser(id, user?.id)
     ]);

     const hasLiked = Boolean(isLiked);
    
    const isOwner = context.user?.id == theater._ownerId;
    const isLogged = Boolean(context.user?.id);

    const onDelete = async () => {
        await theaterService.deleteEvents(id);
        context.page.redirect('/profile')
    }
    const onLike = () => {
        likesService.addLike({theaterId: id})
        .then();
     }

    context.render(detailsTemplate(theater, isOwner, isLogged, id, onDelete, countOfLikes, onLike, hasLiked));


}