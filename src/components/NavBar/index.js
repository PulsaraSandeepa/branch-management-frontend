import { Navbar, Container, Nav } from 'react-bootstrap';
import NavLink from "react-router-dom/es/NavLink";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const NavBar = () => {

    return(
        <div className="NavBar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/branch">Branch</Link>
                        <Link className="nav-link" to="/add-branch">Add Branch</Link>
                        <Link className="nav-link" to="/">Search</Link>
                        <Link className="nav-link" to="/">Export Monthly</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;