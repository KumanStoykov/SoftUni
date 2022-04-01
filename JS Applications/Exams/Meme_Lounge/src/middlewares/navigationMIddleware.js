import { render } from '../library/library.js';
import { navigationView } from '../pages/navigationView.js';

const navigationHeader = document.querySelector('.navigationHeader');

export const navigationMiddleware = (context, next) => {
    render(navigationView(context), navigationHeader);
    next();
}