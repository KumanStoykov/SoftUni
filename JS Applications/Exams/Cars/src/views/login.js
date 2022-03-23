import { html } from '../library/lib.js';
import { loginUser } from '../services/users.js';

const loginTemplate = (context) => html`
<section id="login">
    <div class="container">
        <form @submit=${onSubmit.bind(null, context)} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`;

export async function loginView(context) {
    context.render(loginTemplate(context));
}

async function onSubmit(context, e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const [username, password] = [...formData.values()].map(i => i.trim());

    try{
        if(!username || !password) {
            throw new Error('All fields are require!');
        }
        
        await loginUser(username, password);
        e.target.reset();
        context.page.redirect('/allCars');
    }catch(err) {
        alert(err.message);
    }

}