import { html } from '../library/library.js';
import { register } from '../services/users.js';


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="content auth">
    <form @submit=${onSubmit} id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>`;

export const registerView = (context) => {



    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let email = formData.get('email').trim();
        let password = formData.get('password').trim();
        let confirmPassword = formData.get('confirm-password').trim();

        try {
            if (!email || !password) {
                throw new Error('All fields are required!');
            }
            if (confirmPassword != password) {
                throw new Error('Passwords don\'t match!');
            }

            await register(email, password);
            context.page.redirect('/');
        } catch (err) {
            alert(err.message);
        }
    }

    context.render(registerTemplate(onSubmit));

}