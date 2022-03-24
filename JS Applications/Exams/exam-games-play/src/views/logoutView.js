import { logout } from "../services/users.js"
import { clearUserData } from "../util.js";


export const logoutView = async (context) => {
    await logout();
    clearUserData();
    context.page.redirect('/');
}  