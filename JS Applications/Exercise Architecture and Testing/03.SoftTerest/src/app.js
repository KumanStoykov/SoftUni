import { showHome } from './view/home.js';
import { showCatalog } from './view/catalog.js';
import { showLogin } from './view/login.js';
import { showRegister } from './view/register.js';
import { showDetails } from './view/details.js';
import { showCreate } from './view/create.js';
import { initialize, context } from './router.js';
import * as user from '../src/api/users.js'




//Remove all views
document.getElementById('views').remove;

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/details': showDetails,
    '/create': showCreate
};
//Take all views and given to router
initialize(links);
//Start with home views
context.nextView('/');
//Navigation current view
context.navBarView();

//Logout--------------------------------------
document.getElementById('logout').addEventListener('click', onLogout);
function onLogout(e) {
    e.preventDefault();
    user.logoutUser();
    context.navBarView();
}