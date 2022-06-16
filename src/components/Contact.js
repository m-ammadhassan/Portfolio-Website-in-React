import React from 'react';
import '../styles/Default.css';
import '../styles/Contact.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ContactForm from './ContactForm';
import ContactImage from '../assets/images/contact.png';

function Contact()
{
    return(
        <section className="contact" id="contact">
            <Container className="py-5">

                <Row className="py-3 mt-5 section-head text-center">
                    <Col>
                        <h2>Contact ME</h2>
                        <h5>Have Any Query?</h5>
                    </Col>
                </Row>

                <Row className="py-4 justify-content-between">
                    <Col sm={11} md={9} lg={5} className="mx-auto mx-lg-0">
                        <Image src={ContactImage} fluid />
                    </Col>

                    <Col lg={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;