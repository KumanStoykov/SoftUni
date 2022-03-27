import { getUserData } from "../utility/userStorage.js";


export const userMiddleware = (context, next) => {
    context.user = getUserData();
    next();
}