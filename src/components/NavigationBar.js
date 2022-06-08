import React from 'react';
import '../styles/NavigationBar.css'
import {Container, Nav, Navbar} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleChevronDown} from '@fortawesome/free-solid-svg-icons';

function NavigationBar()
{
    return(
        <section className="navigation">
            <Navbar bg="dark" expand="lg" id="nav" fixed="top">
                <Container className="py-2 px-4 px-sm-0">

                    {/* Navigation Bar Title */}
                    <Navbar.Brand href="#home" className="me-0">
                        <h1>
                            Portfo<span>lio.</span>
                        </h1>
                    </Navbar.Brand>

                    {/* Navigation Bar Collapse */}
                    <Navbar.Toggle aria-controls="basic-navbar">
                        <div className="menu-btn">
                            <FontAwesomeIcon icon={faCircleChevronDown} size="lg" />
                        </div>
                    </Navbar.Toggle>

                    {/* Navigation Bar Menu */}
                    <Navbar.Collapse id="basic-navbar">
                        <Nav className="ms-auto mt-3 mt-lg-0 text-center">
                            <Nav.Link href="" className="mx-lg-2 active">Home</Nav.Link>
                            <Nav.Link href="" className="mx-lg-2">About</Nav.Link>
                            <Nav.Link href="" className="mx-lg-2">Skills</Nav.Link>
                            <Nav.Link href="" className="mx-lg-2">Work</Nav.Link>
                            <Nav.Link href="" className="mx-lg-2">Services</Nav.Link>
                            <Nav.Link href="" className="mx-lg-2">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </section>
    );
}

export default NavigationBar;