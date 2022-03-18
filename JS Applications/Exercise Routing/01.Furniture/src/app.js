import { getUserData } from './util.js';
import { page, render } from './library.js';
import { catalogPage } from './view/catalog.js';
import { loginPage } from './view/login.js';
import { logoutUser } from './api/users.js';
import { registerPage } from './view/register.js';
import { createPage } from './view/create.js';
import { detailsPage } from './view/details.js';
import { editPage } from './view/edit.js';



const root = document.getElementById('root');

//Logout button
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', catalogPage, onLogout);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-furniture', catalogPage)


navBar();
page.start();

function decorateContext(content, next) {
    content.render = (content) => render(content, root);
    content.navBar = navBar;
    next();
}


function onLogout() {
    logoutUser();
    navBar();
    page.redirect('/');
}



function navBar() {
    const userData = getUserData();

    if(userData == null) {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    } else {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    }
}