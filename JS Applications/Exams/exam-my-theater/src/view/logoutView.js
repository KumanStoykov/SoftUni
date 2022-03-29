import * as userStorage from '../utility/userStorage.js';
import * as userService from '../service/userService.js';

export const logoutView = (context) => {
    userService.logout();
    userStorage.clearUserData();
    context.page.redirect('/');

}