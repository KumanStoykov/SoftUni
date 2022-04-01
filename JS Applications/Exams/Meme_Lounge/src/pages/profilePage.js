import { html } from '../library/library.js';
import * as memesService from '../service/memesService.js';

const userMemeTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

const imageTemplate = (memes) => html `
${memes.gender 
? html `<img id="user-avatar-url" alt="user-profile" src="/images/male.png">` 
: html `<img id="user-avatar-url" alt="user-profile" src="/images/female.png">`}`;


const profileTemplate = (memes) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        ${imageTemplate(memes)}
        <div class="user-content">
            <p>Username: ${memes.user.username}</p>
            <p>Email: ${memes.user.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      
       ${memes.length > 0
        ? memes.map(userMemeTemplate)
        : html `<p class="no-memes">No memes in database.</p>` 
       }        
    </div>
</section>`;

export const profilePage = async (context) => {
    const user = context.user;

    const myMemes = await memesService.getMyProfile(user.id);
    myMemes.user = user
    myMemes.gender = Boolean(user.gender == 'male');

    context.render(profileTemplate(myMemes));
}