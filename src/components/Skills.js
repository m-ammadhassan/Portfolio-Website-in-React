import React from 'react';
import SkillBars from './SkillBars';
import '../styles/Default.css';
import '../styles/Skills.css';
import { Col, Container, Row } from 'react-bootstrap';

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

                <Row>
                    <SkillBars />
                </Row>
            </Container>
        </section>
    );
}

export default Skills;