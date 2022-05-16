

const Login = () => {


    return (
        <section id="login-page">
            <div className="boxs">
                <div className="card-image">
                    <h2 className="card-heading">
                        Login
                    </h2>
                </div>
                <form className="card-form" action="" method="">

                    <div className="input">
                        <input type="text" className="input-field" placeholder="alexander" id="username" name="" value="" />
                        <label className="username">Username</label>
                    </div>
                    <div className="input">
                        <input type="password" className="input-field" id="password" name="" placeholder="******" />
                        <label className="password">Password</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Login</button>
                    </div>
                </form>
                <div className="card-info">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;