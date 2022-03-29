import { getUserData } from "../util.js";


export const userMiddleware = (context, next) => {

    context.user = getUserData();

    next();
}