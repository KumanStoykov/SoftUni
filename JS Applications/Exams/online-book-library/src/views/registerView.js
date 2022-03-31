import { html } from '../library/lib.js';
import { submitHandler } from '../utility/submitHandler.js';
import * as userService from '../services/userService.js';


const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
    <form @submit=${onSubmit} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
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
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`;

export const registerView = (context) => {
    const onSubmit = (data, e) => {

        const [email, password] = data;
        try {
            if (!email || !password) {
                throw new Error('All fields are require!');
            }
            userService.register({ email, password })
                .then(() => {
                    e.target.reset();

                    context.page.redirect('/');
                });

        } catch (err) {
            alert(err.message);
        }

    }
    context.render(registerTemplate(submitHandler(onSubmit)));
}