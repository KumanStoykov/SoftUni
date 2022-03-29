import { page } from './library/library.js';

import { contentRenderMiddleware } from './middleware/contentRenderMiddleware.js';
import { navigationRenderMiddleware } from './middleware/navigationRenderMiddleware.js';
import { userMiddleware } from './middleware/userMiddleware.js';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/edit.js';


page(userMiddleware);
page(navigationRenderMiddleware);
page(contentRenderMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/catalog', catalogView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);


page.start();