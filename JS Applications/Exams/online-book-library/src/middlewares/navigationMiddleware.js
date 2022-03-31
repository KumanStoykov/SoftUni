import { render } from '../library/lib.js';
import { navigationView } from '../views/navigationView.js';

const headerNavigation = document.querySelector('#site-header');

export const navigationMiddleware = (context, next) => {

    render(navigationView(context), headerNavigation);
    next();
}