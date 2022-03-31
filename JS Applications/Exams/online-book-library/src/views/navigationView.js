import { html } from '../library/lib.js';

const guest = () => html`
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>`;

const user = (email) => html`
<div id="user">
    <span>Welcome, ${email}</span>
    <a class="button" href="/myBooks">My Books</a>
    <a class="button" href="/create">Add Book</a>
    <a class="button" href="/logout">Logout</a>
</div>`

const navigationTemplate = (isAuthentication, email) => html`
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        ${isAuthentication
        ?user(email)
        :guest()
        }
    </section>
</nav>`;

export const navigationView = (context) => {
    
    const isAuthentication = Boolean(context.user);
    const email = isAuthentication ? context.user.email : null;
   

    return navigationTemplate(isAuthentication, email);
}