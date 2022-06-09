import React from 'react';
import '../styles/Default.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Work()
{
    return(
        <section className="work" id="work">
            <Container className="py-5">

                <Row className="py-3 section-head text-center">
                    <Col>
                        <h2>My Work</h2>
                        <h5>What I Have Done?</h5>
                    </Col>
                </Row>

                <Row className="py-4">
                </Row>
            </Container>
        </section>
    );
}

export default Work;