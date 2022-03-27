import { clearUserData } from "../utility/userStorage.js";


export const logoutView = (context) => {

    clearUserData();
    context.page.redirect('/');  

}