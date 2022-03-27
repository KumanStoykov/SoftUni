import { html } from '../library/lib.js';

const user = (userData) => html`
<li class="nav-item">
    <a class="nav-link">Welcome, ${userData.email}</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/logout">Logout</a>
</li>`;

const guest = () => html`
<li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="/register">Register</a>
</li>`;


 const navigationTemplate = (userData) => html`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <a class="navbar-brand text-light" href="/">Movies</a>
    <ul class="navbar-nav ml-auto ">
        ${Boolean(userData)
        ? user(userData)
        : guest()
        }

    </ul>
</nav>`;

export const navigationView = (context) => {
    return navigationTemplate(context.user);
}

