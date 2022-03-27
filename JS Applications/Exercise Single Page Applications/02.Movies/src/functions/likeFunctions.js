import { html } from '../library/lib.js';
import * as likesService from '../services/likesServices.js';


export const likeFunctions = (isLiked, isLikedId, context) => {
    const id = context.params.id;


    const likeButtonsTemplate = () => html `
    ${isLiked
        ? html `<a @click=${unLike} class="btn btn-primary" href="javascript:void(0)">Unlike</a>`
        : html `<a @click=${onLike} class="btn btn-primary" href="javascript:void(0)">Like</a>`}
        `;


    const onLike = () => {
        likesService.addLike({movieId: id})
        .then(() => {
         context.page.redirect(`/details/${id}`);
        });
     }
 
    const unLike = () => {
         likesService.revokeLike(isLikedId)
         .then(() => {
         context.page.redirect(`/details/${id}`);
         });
     }
     return likeButtonsTemplate()
     
}