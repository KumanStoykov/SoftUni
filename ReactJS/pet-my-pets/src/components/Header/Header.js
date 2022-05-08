import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const backgroundIsActive = {
        background: 'rgb(248, 215, 107)'
    };

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    <div id="guest">

                        <NavLink className="button" to="/login"
                         style={({ isActive }) => (isActive ? backgroundIsActive : null)}
                        >
                        Login
                        </NavLink>

                        <NavLink className="button" to="/register"
                        style={({ isActive }) => (isActive ? backgroundIsActive : null)}
                        >
                        Register
                        </NavLink>

                    </div>
                    <div id="user">
                        <span>Welcome, email</span>

                        <NavLink className="button" to="/my-pets"
                        style={({ isActive }) => (isActive ? backgroundIsActive : null)}
                        >
                        My Pets
                        </NavLink>

                        <NavLink className="button" to="/create"
                        style={({ isActive }) => (isActive ? backgroundIsActive : null)}
                        >
                        Add Pet
                        </NavLink>

                        <Link className="button" to="/logout">Logout</Link>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;