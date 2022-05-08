const Header = () => {

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <a href="#">Dashboard</a>
                    <div id="guest">
                        <a className="button" href="#">Login</a>
                        <a className="button" href="#">Register</a>
                    </div>
                    <div id="user">
                        <span>Welcome, email</span>
                        <a className="button" href="#">My Pets</a>
                        <a className="button" href="#">Add Pet</a>
                        <a className="button" href="#">Logout</a>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;