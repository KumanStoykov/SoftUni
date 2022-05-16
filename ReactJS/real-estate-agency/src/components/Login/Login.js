

const Login = () => {


    return (
        <section id="login-page">
            <div class="boxs">
                <div class="card-image">
                    <h2 class="card-heading">
                        Login
                    </h2>
                </div>
                <form class="card-form" action="" method="">

                    <div class="input">
                        <input type="text" class="input-field" placeholder="alexander" id="username" name="" value="" />
                        <label class="username">Username</label>
                    </div>
                    <div class="input">
                        <input type="password" class="input-field" id="password" name="" placeholder="******" />
                        <label class="password">Password</label>
                    </div>
                    <div class="action">
                        <button class="action-button">Login</button>
                    </div>
                </form>
                <div class="card-info">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;