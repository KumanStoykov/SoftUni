import { render } from '../library/lib.js';
import { navigationView } from '../views/navigationView.js';

const navigationHeader = document.querySelector('.navigationHeader');



export const navigationMiddleware = (context, next) => {

   render(navigationView(context), navigationHeader);
   next();
} 