import { loginUser } from '../api/users.js';
import { html } from '../library.js';

const loginTemplate = (onSubmit, errorMsg, errors) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                ${errorMsg ? html`<div class="form-group error">${errorMsg}</div>` : null}
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control' + (errors.email ? ' is-invalid' : '')} id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (errors.password ? ' is-invalid' : '')} id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
</div>`

export function loginPage(context) {


    updateView(null, {});

    function updateView(errorMsg, errors) {
        context.render(loginTemplate(onSubmit, errorMsg, errors));

    }

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        const [email, password] = [...formData.values()].map(i => i.trim());

        try{
            if(!email || !password) {
                throw {
                    error: new Error('All fields are required!'),
                    errors: {
                        email: !email,
                        password: !password
                    }
                }
            }

           await loginUser(email, password);
            context.navBar();
            context.page.redirect('/');
        } catch(err) {
         err.errors = {
             email: true,
             password: true
         };
            const message = err.message || err.error.message;
            updateView(message, err.errors || {});
        }
    }
}
