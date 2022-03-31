import * as userStorage from '../utility/userStorage.js';

export const userMiddleware = (context, next) => {

    context.user = userStorage.getUserData();
    next();
}