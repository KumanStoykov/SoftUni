import * as userStorage from '../utility/userStorage.js';

export const userMIddleware = (context, next) => {

    context.user = userStorage.getUserData();
    next();
}