import { html } from '../library/lib.js';
import * as userService from '../services/userService.js';
import { submitHandler } from '../utility/submitHandler.js';


const loginTemplate = (onSubmit) => html`
<section id="form-login">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</section>`;

export const loginView = (context) => {

    const onSubmit = (data, e) => {
            
        let [email, password] = data;

        try {
            if(!email || !password) {
                throw new Error('Email or password don\'t match!');
            }

            userService.login({email, password})
            .then(() => {
                e.target.reset();
                context.page.redirect('/');
            });            

        }catch(err) {
            alert(err.message);
        }
    }

    context.render(loginTemplate(submitHandler(onSubmit)));
}