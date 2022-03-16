import * as user from '../api/users.js'

const loginPage = document.getElementById('loginPage');

let ctx = null;

export function showLogin(context) {
    ctx = context;
    context.showSection(loginPage);

}

const form = document.getElementById('loginForm');

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    await user.loginUser(email, password);
    form.reset();
    //Redirect to home view
    ctx.nextView('/');
    ctx.navBarView();
}