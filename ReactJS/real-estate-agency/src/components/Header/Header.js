import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <ul>
                    <li><Link to="/apartment-for-recent">Housing for rent</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/create">Create offer</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;