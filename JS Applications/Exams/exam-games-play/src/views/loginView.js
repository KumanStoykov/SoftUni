import { html } from '../library/library.js';
import { login } from '../services/users.js';


const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form @submit=${onSubmit} id="login">

        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>`;

export const loginView = (context) => {

    

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let [email, password] = [...formData.values()].map(i => i.trim());

        try {
            if (!email || !password) {
                throw new Error('All fields are required!');
            }
            await login(email, password);
            context.page.redirect('/');
        } catch (err) {
            alert(err.message);
        }

    }

    context.render(loginTemplate(onSubmit));

}