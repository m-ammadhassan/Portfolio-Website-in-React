import React, {useReducer} from 'react';
import '../styles/Default.css';
import '../styles/Work.css';
import { Card, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import WorkCard from './WorkCard';


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

                <Row className="pt-4 justify-content-center">

                    <WorkCard />

                </Row>
            </Container>
        </section>
    );
}

export default Work;