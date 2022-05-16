

const Register = () => {


    return (
        <section id="register-page">
            <div className="boxs">
                <div className="card-image">
                    <h2 className="card-heading">
                        Create your account
                    </h2>
                </div>
                <form className="card-form" action="" method="">
                    <div className="input">
                        <input type="text" className="input-field" placeholder="Alexander Parkinson" id="name" name="" value="" />
                        <label className="name">Full Name</label>
                    </div>
                    <div className="input">
                        <input type="text" className="input-field" placeholder="alexander" id="username" name="" value="" />
                        <label className="username">Username</label>
                    </div>
                    <div className="input">
                        <input type="password" className="input-field" id="password" name="" placeholder="******" />
                        <label className="password">Password</label>
                    </div>
                    <div className="input">
                        <input type="password" className="input-field" id="re-password" name="" placeholder="******" />
                        <label className="re-password">Repeat Password</label>
                    </div>
                    <div className="action">
                        <button className="action-button">Get started</button>
                    </div>
                </form>

                <div className="card-info">
                    <small>Already have an account?<a href="/login"> Sign in</a>
                    </small>
                </div>
            </div>
        </section>
    );
};

export default Register;