import * as user from '../api/users.js'

const registerPage = document.getElementById('registerPage');

const form = document.getElementById('registerForm');

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(registerPage);
}

form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password, repeatPassword } = Object.fromEntries(formData);

    if(email.length < 4 || password.length < 4 || password != repeatPassword) {
        return alert('invalid email/password');
    }

    await user.registerUser(email, password);

    form.reset();
    //Redirect to home view
    ctx.nextView('/');
    ctx.navBarView();
    
}

