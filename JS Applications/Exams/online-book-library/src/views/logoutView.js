import * as userService from '../services/userService.js';

export const logoutView = (context) => {

    userService.logout();
    
    context.page.redirect('/');
} 