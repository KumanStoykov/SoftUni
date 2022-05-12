import { Link, NavLink } from 'react-router-dom';

const Header = ({
    email
}) => {

    let guestNavigate = (
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
    );

    let userNavigate = (
        <div id="user">
            <span>Welcome, {email}</span>

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
    );

    const backgroundIsActive = {
        background: 'rgb(248, 215, 107)',
        color: 'black'
    };

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>

                    {email
                    ? userNavigate
                    : guestNavigate
                    }
                        
                </section>
            </nav>
        </header>
    );
}

export default Header;