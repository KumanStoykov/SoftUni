import { html } from '../library/library.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as userService from '../service/userService.js';
import { notificationView } from '../notification/notification.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <form @submit=${onSubmit} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export const loginPage = (context) => {

    const onSubmit = (date, e) => {
        const [email, password] = date;

        try {
            if (!email || !password) {
                throw new Error('All fields are require!');
            }

            userService.login({ email, password })
                .then(() => {
                    e.target.reset();
                    context.page.redirect('/allMemes');
                });

        } catch (err) {
            notificationView(err.message);
        }
    }

    context.render(loginTemplate(submitHandler(onSubmit)));
}