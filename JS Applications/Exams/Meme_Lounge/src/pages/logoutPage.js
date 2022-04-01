import * as userService from '../service/userService.js';

export const logoutPage = (context) => {
    userService.logout();
    context.page.redirect('/');
}