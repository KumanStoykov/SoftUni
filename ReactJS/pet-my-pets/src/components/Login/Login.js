import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/authContext';

import * as authServices from '../../services/authServices';

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email').trim();
        let password = formData.get('password').trim();

        authServices.login(email, password)
            .then(data => {
                login(data);
                navigate('/dashboard');
            })
            .catch(err => {
                //TODO: notification
                alert(err.message);
            });


    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
}

export default Login;