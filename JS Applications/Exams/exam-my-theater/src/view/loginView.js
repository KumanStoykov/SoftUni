import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as userService from '../service/userService.js'

const loginTemplate = (onSubmit) => html`
<section id="loginaPage">
    <form @submit=${onSubmit} class="loginForm">
        <h2>Login</h2>
        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>
        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>`;

export const loginView = (context) => {

    const onSubmit = (data, e) => {

        let [email, password] = data;

        try {
            if (!email || !password) {
                throw new Error('Email or password don\'t match!');
            }

            userService.login({ email, password })
                .then(() => {
                    e.target.reset();
                    context.page.redirect('/');
                });

        } catch (err) {
            alert(err.message);
        }
    }

    context.render(loginTemplate(submitHandler(onSubmit)));
}