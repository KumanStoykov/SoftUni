

const Register = () => {


    return (
        <section id="register-page">
            <div class="boxs">
                <div class="card-image">
                    <h2 class="card-heading">
                        Create your account
                    </h2>
                </div>
                <form class="card-form" action="" method="">
                    <div class="input">
                        <input type="text" class="input-field" placeholder="Alexander Parkinson" id="name" name="" value="" />
                        <label class="name">Full Name</label>
                    </div>
                    <div class="input">
                        <input type="text" class="input-field" placeholder="alexander" id="username" name="" value="" />
                        <label class="username">Username</label>
                    </div>
                    <div class="input">
                        <input type="password" class="input-field" id="password" name="" placeholder="******" />
                        <label class="password">Password</label>
                    </div>
                    <div class="input">
                        <input type="password" class="input-field" id="re-password" name="" placeholder="******" />
                        <label class="re-password">Repeat Password</label>
                    </div>
                    <div class="action">
                        <button class="action-button">Get started</button>
                    </div>
                </form>

                <div class="card-info">
                    <small>Already have an account?<a href="/login"> Sign in</a>
                    </small>
                </div>
            </div>
        </section>
    );
};

export default Register;