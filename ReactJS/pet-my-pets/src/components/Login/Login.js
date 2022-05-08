const Login = () => {

    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData('email');
    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLogin}>
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