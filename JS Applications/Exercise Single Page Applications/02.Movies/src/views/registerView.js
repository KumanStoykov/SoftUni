import { html } from '../library/lib.js';
import * as userService from '../services/userService.js';
import { submitHandler } from '../utility/submitHandler.js';



const registerTemplate = (onSubmit) => html`
<section id="form-sign-up">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input id="repeatPassword" type="password" class="form-control" placeholder="Repeat-Password"
                name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>`;

export const registerView = (context) => {

    const onSubmit = (data, e) => {
              
        let [email, password, repeatPassword] = data;

        try {
            if (!email) {
                throw new Error('Email input must be filled!');
            }
            if (password.length < 6) {
                throw new Error('The password should be at least 6 characters long!');
            }

            if (password != repeatPassword) {
                throw new Error('The repeat password should be equal to the password!');
            }
            userService.register({ email, password })
            .then(() => {
                e.target.reset();
                context.page.redirect('/')
            });

        } catch (err) {
            alert(err.message);
        }
    }
    context.render(registerTemplate(submitHandler(onSubmit)));
}