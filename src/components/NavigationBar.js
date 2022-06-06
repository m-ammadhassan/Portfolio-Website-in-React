import React from 'react';
import '../styles/NavigationBar.css'
import {Container, Nav, Navbar} from 'react-bootstrap';

function NavigationBar()
{
    return(
        <section className="navigation-bar">
            <Navbar bg="dark" expand="md" className="fixed-top">
                <Container className="py-2 px-4 px-sm-0">

                    {/* Navigation Bar Title */}
                    <Navbar.Brand href="#home">
                        <h1>
                            Portfo<span>lio.</span>
                        </h1>
                    </Navbar.Brand>

                    {/* Navigation Bar Collapse */}
                    <Navbar.Toggle aria-controls="basic-navbar"/>

                    {/* Navigation Bar Menu */}
                    <Navbar.Collapse id="basic-navbar">
                        <Nav className="ms-auto mt-3 mt-md-0 text-center">
                            <Nav.Link href="" className="mx-md-2 active">Home</Nav.Link>
                            <Nav.Link href="" className="mx-md-2">About</Nav.Link>
                            <Nav.Link href="" className="mx-md-2">Skills</Nav.Link>
                            <Nav.Link href="" className="mx-md-2">Work</Nav.Link>
                            <Nav.Link href="" className="mx-md-2">Services</Nav.Link>
                            <Nav.Link href="" className="mx-md-2">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </section>
    );
}

export default NavigationBar;