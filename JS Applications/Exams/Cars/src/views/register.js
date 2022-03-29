import { html } from '../library/lib.js';
import { registerUSer } from '../services/users.js';

const registerTemplate = (context) => html`
<section id="register">
    <div class="container">
        <form @submit=${onSubmit.bind(null, context)} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

export async function registerView(context) {
    context.render(registerTemplate(context));
}

async function onSubmit(context, e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const [username, password, repeatPass] = [...formData.values()].map(i => i.trim());

    try{
        if(!username || !password || !repeatPass) {
            throw new Error('All fields are require!');
        }
        if(password != repeatPass) {
            throw new Error('Password don\'t match!');
        }
        
        await registerUSer(username, password);
        e.target.reset();
        context.page.redirect('/allCars');
    }catch(err) {
        alert(err.message);
    }
}