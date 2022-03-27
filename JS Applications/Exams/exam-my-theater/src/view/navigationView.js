import { html } from '../library/lib.js';

const user = () => html`
<li><a href="/profile">Profile</a></li>
<li><a href="/create">Create Event</a></li>
<li><a href="/logout">Logout</a></li>`;

const guest = () => html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

const navigationTemplate = (isAuthentication) => html`
<nav>
    <a href="/">Theater</a>
    <ul>
        ${isAuthentication
        ?user()
        :guest()
        }
        
    </ul>
</nav>`;

export const navigationView = (context) => {
    return navigationTemplate(Boolean(context.user));
}



