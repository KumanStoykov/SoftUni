import { render } from '../library/library.js';
import { navigationView } from '../views/navigationView.js';

const headerNavigation = document.querySelector('#navigation');


export const navigationRenderMiddleware = (context, next) => {
    render(navigationView(context), headerNavigation);

    next();
}


