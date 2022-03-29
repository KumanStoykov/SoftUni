import  { page }  from './library/lib.js';
import { authMiddleware } from './middleware/authMiddleware.js';
import { renderMiddleware } from './middleware/renderMiddleware.js';
import { allCarsView } from './views/allCars.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { logoutFn } from './views/logout.js';
import { myCarsView } from './views/myCars.js';
import { registerView } from './views/register.js';
import { searchView } from './views/search.js';




page(renderMiddleware);
page(authMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/allCars', allCarsView);
page('/myCars', myCarsView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/myCars', myCarsView);
page('/search', searchView);
page('/logout', logoutFn);



page.start();