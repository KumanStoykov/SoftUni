import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as userService from '../services/userService.js';

const loginTemplate = (onSubmit) => html`
<section id="login-page" class="login">
    <form @submit=${onSubmit} id="login-form" action="" method="">
        <fieldset>
            <legend>Login Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>`;

export const loginView = (context) => {

    const onSubmit = (data, e) => {

        const [email, password] = data;
        try {
            if (!email || !password) {
                throw new Error('All fields are require!');
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