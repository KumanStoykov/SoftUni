import { getUserData } from '../util.js';


export function authMiddleware(context, next) {
    const user = getUserData();
        
    context.isAuthentication = Boolean(user);

    next();
}