import { Link, NavLink } from 'react-router-dom';

const Header = () => {  
    let activeLinkStyle = {
        color: 'rgb(82, 133, 139)',
        textDecoration: 'underline',
    };

    return (
        <header >
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <NavLink  to="/games"
                style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                >
                All games
                </NavLink>
                
                <div id="user">

                    <NavLink  to="/create-game"
                    style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                    >
                    Create Game
                    </NavLink>

                    <NavLink  to="/logout">Logout</NavLink>
                </div>
                <div id="guest">

                    <NavLink  to="/login"
                    style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                    >
                    Login
                    </NavLink>

                    <NavLink  to="/register"
                    style={({ isActive }) => (isActive ? activeLinkStyle : null)}
                    >
                    Register
                    </NavLink>

                </div>
            </nav>
        </header>
    );
};

export default Header;