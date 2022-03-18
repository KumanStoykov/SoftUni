import { registerUser } from '../api/users.js';
import { html, render } from '../library.js';

const registerTemplate = (onSubmit, errorMsg, errors) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                ${errorMsg ? html `<div class="form-group error">${errorMsg}</div>` : null}
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control' + (errors.email ? ' is-invalid' : '')} id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (errors.password ? ' is-invalid' : '')} id="password" type="password" name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class=${'form-control' + (errors.rePass ? ' is-invalid' : '')} id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
</div>`;

export function registerPage(context) {

    updateView(null, {});

    function updateView(errorMsg, errors) {
        context.render(registerTemplate(onSubmit, errorMsg, errors));
    
    }

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
       
    
        const  [email, password, rePass]  = [...formData.values()].map(i => i.trim());
        
        try{
            if (!email || !password ) {
                throw{
                    error: new Error('All fields are required!'),
                    errors: {
                        email: !email,
                        password: !password,
                        rePass: !rePass
                    }
                };                    
            }
            if (password != rePass) {                
                throw{
                    error: new Error('Password dont\'t match!'),
                    errors: {
                        password: true,
                        rePass: true
                    }
                }; 
            }
    
           await registerUser(email, password);
            
            context.navBar();
            context.page.redirect('/');
        } catch(err) {
            const message = err.message || err.error.message;
            updateView(message, err.errors || {});
        }    
    }    
}
