import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand to="/" as={Link}>YOUR TRUCK</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '160px' }}
                        navbarScroll
                    >
                        <Nav.Link to="/" as={Link}>Home</Nav.Link>
                        <Nav.Link to="/about" as={Link}>About</Nav.Link>
                        <Nav.Link to="/contacts" as={Link}>Contacts</Nav.Link>
                    </Nav>                                         
                        <Nav.Link to="/login" as={Link}>Login</Nav.Link>
                        <Nav.Link to="/register" as={Link}>Register</Nav.Link>                       
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Header;