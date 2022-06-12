import React from 'react';
import '../styles/Default.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Services()
{
    return(
        <section className="services" id="services">
            <Container className="py-5">

                <Row className="py-3 section-head text-center">
                    <Col>
                        <h2>Services</h2>
                        <h5>What I Can Do?</h5>
                    </Col>
                </Row>

                <Row className="py-4">
                </Row>
            </Container>
        </section>
    );
}

export default Services;