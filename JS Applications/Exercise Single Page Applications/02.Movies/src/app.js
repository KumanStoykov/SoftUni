import { page } from "./library/lib.js";

import { userMiddleware } from "./middlewares/userMiddleware.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";

import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { createView } from "./views/createView.js";
import { editView } from "./views/editView.js";
import { detailsView } from "./views/detailsView.js";
import { logoutView } from "./views/logoutView.js";

page(userMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/edit/:id', editView);
page('/details/:id', detailsView);
page('/logout', logoutView);

page.start();