import { logoutUser } from "../services/users.js";


export async function logoutFn(context) {
    await logoutUser();
    context.page.redirect('/');
}