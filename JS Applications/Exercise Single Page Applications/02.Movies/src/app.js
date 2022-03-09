import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';
import { onLogout } from './logout.js';

const navBar = document.querySelector('.navbar');

navBar.addEventListener('click', onNavigate);

//Start with home page
showHome();
//Routing
const views = {
    'home-link': showHome,
    'login-link': showLogin,
    'register-link': showRegister
}

function onNavigate(e) {
    e.preventDefault();

    const view = views[e.target.id];
    if (typeof view == 'function') {
        view();
    }
}

// Logout-----------------------------------------------------------------------------------------

document.querySelector('#logout-link').addEventListener('click', onLogout);