import { html } from '../library/library.js';

const user = (email) => html`
<div class="user">
    <a href="/create">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${email}</span>
        <a href="/myProfile">My Profile</a>
        <a href="/logout">Logout</a>
    </div>
</div>`;

const guest = () => html`
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/">Home Page</a>
</div>`;

const navigationTemplate = (context) => html`
<nav>
    <a href="/allMemes">All Memes</a>

    ${context.user
        ? user(context.user.email)
        : guest()
    }
</nav>`;

export const navigationView = (context) => {
    return navigationTemplate(context);
} 