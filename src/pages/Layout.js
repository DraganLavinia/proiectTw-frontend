import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.css';

const Layout = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">TripReviews</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Acasa</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Inregistrare</Nav.Link>
                    <NavDropdown id="nav-dropdown-dark-example" title="Username" menuVariant="light">
                        <NavDropdown.Item as={Link} to="/editaccount">Editeaza cont</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="#">Delogare</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Container>
            </Navbar>
            <div className="content">
                <Outlet />
            </div>
        </>
    )
};

export default Layout;