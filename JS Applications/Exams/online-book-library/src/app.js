import { page } from "./library/lib.js";

import { userMiddleware } from "./middlewares/userMiddleware.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";

import { dashboardView } from "./views/dashboardView.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { detailsView } from "./views/detailsView.js";
import { createView } from "./views/createView.js";
import { editView } from "./views/editView.js";
import { myBooksView } from "./views/myBooksView.js";
import { logoutView } from "./views/logoutView.js";

page(userMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page('/', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/myBooks', myBooksView);
page('/logout', logoutView);

page.start();