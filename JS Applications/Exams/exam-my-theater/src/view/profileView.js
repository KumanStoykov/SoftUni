import { html } from '../library/lib.js';
import * as theaterService from '../service/theaterService.js';



const profileTemplate = (user, allMyTheaters) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${user.email}</h2>
    </div>
    <div class="board">
        

        ${allMyTheaters.length > 0

        ? allMyTheaters.map(boardTemplate)

        : html `<div class="no-events">
                <p>This user has no events yet!</p>
                </div>`
        }
        
    </div>
</section>`;

const boardTemplate = (theater) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src=${theater.imageUrl}>
        <h2>${theater.title}</h2>
        <h6>${theater.date}</h6>
        <a href="/details/${theater._id}" class="details-button">Details</a>
    </div>
</div>`

export const profileView = async (context) => {
    const user = context.user;
    const id = context.user.id;

    const allMyTheaters = await theaterService.myTheaters(id);



    context.render(profileTemplate(user, allMyTheaters));
}