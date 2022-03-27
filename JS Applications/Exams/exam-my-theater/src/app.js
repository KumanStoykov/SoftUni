import { page }  from './library/lib.js';

import { userMiddleware } from './middlewares/userMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';

import { homeView } from './view/homeView.js';
import { loginView } from './view/loginView.js';
import { registerView } from './view/registeView.js';
import { createView } from './view/createView.js';
import { editView } from './view/editView.js';
import { detailsView } from './view/detailsView.js';
import { profileView } from './view/profileView.js';
import { logoutView } from './view/logoutView.js';





page(userMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/edit/:id', editView);
page('/details/:id', detailsView);
page('/profile', profileView);
page('/logout', logoutView);

page.start();