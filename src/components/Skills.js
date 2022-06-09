import React from 'react';
import '../styles/Default.css';
import { Col, Container, Image, Row } from 'react-bootstrap';

function Skills()
{
    return(
        <section className="skills" id="skills">
            <Container className="py-5">

                <Row className="py-3 section-head text-center">
                    <Col>
                        <h2>My Skills</h2>
                        <h5>What I Know?</h5>
                    </Col>
                </Row>

                <Row className="py-4">
                </Row>
            </Container>
        </section>
    );
}

export default Skills;