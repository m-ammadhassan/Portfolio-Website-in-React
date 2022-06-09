import React from 'react';
import '../styles/Home.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import DeveloperImage from '../assets/images/developer.png';


function Home()
{
    return(
        <section className="home" id="home">
            <Container className="py-5">
                <Row className="align-items-center justify-content-between flex-column-reverse flex-lg-row py-5">
                    
                    <Col md={6} lg={7} className="home-content text-center text-lg-start p-4 mt-2 mt-lg-0">
                        <h4>Hi, I am</h4>
                        <h1>Muhammad Ammad Hassan</h1>
                        <h4>And I'm a <span className="d-md-block d-lg-inline">Frontend Web Developer</span>
                        </h4>
                    </Col>

                    <Col sm={8} md={6} lg={5} className="home-image text-center">
                        <Image src={DeveloperImage} fluid />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Home;