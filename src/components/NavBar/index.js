import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return(
        <div className="NavBar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link >Branch</Nav.Link>
                        <Nav.Link >Add Branch</Nav.Link>
                        <Nav.Link >Search</Nav.Link>
                        <Nav.Link >Export Monthly</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;