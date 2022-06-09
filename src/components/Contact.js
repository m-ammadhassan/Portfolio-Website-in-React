import React from 'react';
import '../styles/Default.css';
import { Col, Container, Row } from 'react-bootstrap';

function Contact()
{
    return(
        <section className="contact" id="contact">
            <Container className="py-5">

                <Row className="py-3 section-head text-center">
                    <Col>
                        <h2>Contact ME</h2>
                        <h5>Any Query?</h5>
                    </Col>
                </Row>

                <Row className="py-4">
                </Row>
            </Container>
        </section>
    );
}

export default Contact;