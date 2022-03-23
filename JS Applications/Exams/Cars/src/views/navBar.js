import { html } from '../library/lib.js';


const guest = () => html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`;

const loggedIn = (username) => html `<div id="profile">
<a>Welcome, ${username}</a>
<a href="/myCars">My Listings</a>
<a href="/create">Create Listing</a>
<a href="/logout">Logout</a>
</div>`

export const navigationTemplate = (context, username) => html`
<nav>
    <a class="active" href="/">Home</a>
    <a href="/allCars">All Listings</a>
    <a href="/search">By Year</a>
    ${context.isAuthentication
            ? loggedIn(username)
            : guest()
            }   
</nav>`; 
