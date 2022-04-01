import { html } from '../library/library.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as userService from '../service/userService.js';
import { notificationView } from '../notification/notification.js';

const registerTemplate = (onSubmit) => html`
<section id="register">
    <form @submit=${onSubmit} id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export const registerPage = (context) => {

    const onSubmit = (date, e) => {
        const [username, email, password, repeatPass, gender] = date;


        try {
            if (date.some(x => x == '')) {
                throw new Error('All fields are require!');
            }

            userService.register({ username, email, password, repeatPass, gender })
                .then(() => {
                    e.target.reset();
                    context.page.redirect('/allMemes');
                });

        } catch (err) {
            notificationView(err.message);
        }
    }
    context.render(registerTemplate(submitHandler(onSubmit)));
}