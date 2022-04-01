import { page } from './library/library.js';

import { userMIddleware } from './middlewares/userMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMIddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { homePage } from './pages/homePage.js';
import { loginPage } from './pages/loginPage.js';
import { registerPage } from './pages/registerView.js';
import { allMemesPage } from './pages/allMemesPage.js';
import { createPage } from './pages/createPage.js';
import { editPage } from './pages/editPage.js';
import { detailsPage } from './pages/detailsPage.js';
import { profilePage } from './pages/profilePage.js';
import { logoutPage } from './pages/logoutPage.js';



page(userMIddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/allMemes', allMemesPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/myProfile', profilePage);
page('/logout', logoutPage);

page.start();